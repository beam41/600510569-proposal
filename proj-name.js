import React, { Component } from "react";
import { render } from "react-dom";

class ProjName extends Component {
  render() {
    return (
      <div className="box">
        <h1 className="head">{this.props.projName}</h1>
      </div>
    );
  }
}

export default ProjName;
