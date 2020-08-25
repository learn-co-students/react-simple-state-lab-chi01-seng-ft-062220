import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    //define new function for changeColor
    //in the function, include a setState method
    //this setState method should change this.state.color to #333
    //call this function with onClick event

    newColor = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
          <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.newColor} >
          </div>
        )
      }
}