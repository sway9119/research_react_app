import React from "react";

class CheckBoxs extends React.Component {
  constructor() {
    super();
    this.state = {
      prefectures: [], // 都道府県一覧データ郡
    };
  }

  componentDidMount() {
    // 47都道府県一覧を取得する
    const apiKey = process.env.REACT_APP_RESAS_API_KEY;
    fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
      headers: { "X-API-KEY": apiKey },
    })
      .then((response) => response.json()) // fetchApiで取得したリクエスト結果をjsonにする
      .then((res) => {
        this.setState({ prefectures: res.result });
      });
  }

  render() {
    const prefectures = this.state.prefectures;
    console.log(prefectures);
    return (
      <div name="checkboxFeild">
        {prefectures.map((prefecture) => (
          <div class="checkbox" key={prefecture.prefName}>
            <input
              type="checkbox"
              name="Prefecture name"
              id={"checkbox" + prefecture.prefCode}
              onChange={(event) => handleChange(event)}
            ></input>
            <label htmlFor={"checkbox" + prefecture.prefCode}>
              {prefecture.prefName.length === 3
                ? "　" + prefecture.prefName
                : prefecture.prefName}
            </label>
          </div>
        ))}
      </div>
    );
  }
}
export default CheckBoxs;
