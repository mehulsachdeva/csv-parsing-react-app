import React, { Component } from 'react';

class Element extends Component {
  render() {
    return (
      <tr>
        <td style = {{marginLeft: 10}}>{this.props.u}</td>
        <td style = {{marginLeft: 10}}>{this.props.v}</td>
        <td style = {{marginLeft: 10}}>{this.props.w}</td>
      </tr>
    );
  }
}

export default Element;
