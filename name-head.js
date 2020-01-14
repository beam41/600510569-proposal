import React, { Component } from "react";
import { render } from "react-dom";

class NameHead extends Component {
  render() {
    return (
      <div className="box">
        <p className="txt">
          <span className="title">ชื่อ-นามสกุล:</span> {this.props.name}{" "}
          {this.props.lname}
        </p>
        <p className="txt">
          <span className="title">รหัสนักศึกษา:</span> {this.props.stdCode}
        </p>
      </div>
    );
  }
}

export default NameHead;
