import React from "react";

class CheckBoxs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //prefectures: [], // 都道府県一覧データ郡
      prefectures: [],
    };
  }

  componentDidMount() {
    this.setState({ prefectures: this.props.prefectures });
  }

  render() {
    // const prefectures = this.state.prefectures;
    console.log(this.state.prefectures);
    return (
      <div name="checkboxFeild">
        {this.state.prefectures.map((prefecture) => (
          <div className="checkbox" key={prefecture.prefName}>
            <input
              type="checkbox"
              name="Prefecture name"
              id={"checkbox" + prefecture.prefCode}
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
