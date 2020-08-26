import React, { Component } from "react";

export default class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value,
    };
  }

  clickHandler = () => {
    this.setState({
      color: "#333",
    });
  };

  render() {
    return (
      <div
        onClick={this.clickHandler}
        className="cell"
        style={{ backgroundColor: `${this.state.color}` }}
      ></div>
    );
  }
}
