const apiKey = process.env.REACT_APP_RESAS_API_KEY;

export function fetchPrefectures() {
  let prefectures = [];

  // 47都道府県一覧を取得する
  fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
    headers: { "X-API-KEY": apiKey },
  })
    .then((response) => response.json())
    .then((data) => {
      data.result.forEach((prefecture) => {
        let pref = {
          prefCode: prefecture.prefCode,
          prefName: prefecture.prefName,
        };
        prefectures.push(pref);
      });
    });
  return prefectures;
}

export function fetchPopulation(prefCode, prefName) {
  fetch(
    "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=" +
      prefCode,
    { headers: { "X-API-KEY": apiKey } }
  )
    .then((response) => response.json()) // fetchApiで取得したリクエスト結果をjsonにする
    .then((data) => {
      let c = [];
      let d = [];
      Object.keys(data.result.data[0].data).forEach((i) => {
        c.push(data.result.data[0].data[i].year);
        d.push(data.result.data[0].data[i].value);
      });
      const res_series = {
        name: prefName,
        data: d,
      };
      this.setState({
        categories: c,
        series: res_series,
      });
    });
}
