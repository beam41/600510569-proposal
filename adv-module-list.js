import React, { Component } from "react";
import { render } from "react-dom";

class AdvModuleList extends Component {
  render() {
    return (
      <div className="box">
        <span className="title nobot">{`Advanced Module${
          this.props.advanceMod.length > 1 ? "s" : ""
        }`}</span>
        <ol basicMod="advanceMod">
          {this.props.advanceMod.map((val, index) => {
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

export default AdvModuleList;
