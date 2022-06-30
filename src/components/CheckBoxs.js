import React from "react";
import { fetchPrefectures } from "../services/ResasApi";

class CheckBoxs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prefectures: [],
    };
  }

  componentDidMount() {
    this.setState({
      prefectures: fetchPrefectures(),
    });
  }

  render() {
    // console.log("state: ");
    let test = [];
    for (let step = 0; step < 47; step++) {
      // 値が 0 から 4 まで計 5 回実行される
      test.push({ a: 1, b: 2 });
    }

    console.log(test.length);
    console.log(test);
    console.log(this.state.prefectures.length);
    console.log(this.state.prefectures);
    // console.log(this.state.prefectures[1]);
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
