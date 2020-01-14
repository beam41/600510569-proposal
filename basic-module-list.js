import React, { Component } from "react";
import { render } from "react-dom";

class BasicModuleList extends Component {
  render() {
    return (
      <div className="box">
        <span className="title">{`Basic Module${
          this.props.basicMod.length > 1 ? "s" : ""
        }`}</span>
        <ol className="basicMod">
          {this.props.basicMod.map((val, index) => {
            return (
              <li key={index} className={index % 3}>
                {val}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default BasicModuleList;
