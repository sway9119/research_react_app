import React from 'react';

class CheckBoxs extends React.Component {

  constructor() {
    super();
    this.state = {
      prefectures: {}, // 都道府県一覧データ郡
    };
  }

  componentDidMount() {
    // 47都道府県一覧を取得する
    const apiKey = process.env.REACT_APP_RESAS_API_KEY;
    fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', 
      { headers: { 'X-API-KEY': apiKey }}
    )
    .then(response => response.json()) // fetchApiで取得したリクエスト結果をjsonにする
    .then(res => {
      this.setState({ prefectures: res.result });
    });
   }
  
  createItem(props) {
    return (
      <div key={props.prefCode} >{props.prefCode}: {props.prefName}</div>
    );
  }

  render() {
    const prefs = this.state.prefectures;
    return (  
      <div>
        {Object.keys(prefs).map(i => this.createItem(prefs[i]))}
      </div>
    );
  }
};
export default CheckBoxs;
