import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      series: [], // グラフ用のデータオブジェクト
    };
  }

  componentDidMount() {
    // 47都道府県一覧を取得する
    const apiKey = process.env.REACT_APP_RESAS_API_KEY;
    fetch(
      "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=11",
      { headers: { "X-API-KEY": apiKey } }
    )
      .then((response) => response.json()) // fetchApiで取得したリクエスト結果をjsonにする
      .then((res) => {
        let c = [];
        let d = [];
        Object.keys(res.result.data[0].data).forEach((i) => {
          c.push(res.result.data[0].data[i].year);
          d.push(res.result.data[0].data[i].value);
        });
        const res_series = {
          name: "東京",
          data: d,
        };
        this.setState({
          categories: c,
          series: res_series,
        });
      });
  }

  render() {
    console.log(this.state.series);
    const options = {
      title: {
        text: "人口増減率",
      },
      xAxis: {
        title: {
          text: "年度",
        },
        categories: this.state.categories,
      },
      yAxis: {
        title: {
          text: "人口数",
        },
        labels: {
          formatter: function () {
            return this.value;
          },
        },
      },
      // 都道府県を一つも選んでいない場合との分岐条件
      series:
        this.state.series.length === 0
          ? [{ type: "line", name: "都道府県名", data: [] }]
          : [
              {
                type: "line",
                name: this.state.series.name,
                data: this.state.series.data,
              },
            ],
    };
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}
