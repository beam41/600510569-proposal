import React, { Component } from 'react';
import { render } from 'react-dom';

class ProjAd extends Component {
  render() {
    return (
      <div className="box">
        <p className="txt"><span className="title">คำแนะนำโปรเจค:</span> {this.props.projAd}</p>
      </div>
    )
  }
}

export default ProjAd;