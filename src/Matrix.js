import React, { Component } from 'react';
import Cell from './Cell';


export default class Matrix extends Component {
// if we look at genRow, we'll see that every row will map through 
// its vals to create an array of <div className="cell"> JSX  
  genRow = (vals) => {
    console.log("vals",vals)
    //return vals.map(val => <div className="cell"></div>) => replace me and render a cell component instead!
    // Once you have made your Cell component, replace the return value in genRow's map to: <Cell value={val} />. 
    // Here we are specifying our Cell component should have a value prop.
    return vals.map(val => <Cell value={val} />)
  }
  
  // genMatrix in an instance method which maps this.props.values to an array of JSX. 
  // Basically, every 'row' in this.props.values will create a <div className="row">
  genMatrix = () => {
    console.log("this.props.values",this.props.values)
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  

  // The render() method shows us what our Matrix component looks 
  // like: a <div> tag with id=matrix
  render() {
    return (
      <div id="matrix">
        {/* //inside that div, we invoke this.genMatrix() */}
        {this.genMatrix()} 
      </div>
    )
  }
}


// Make a default values prop for Matrix, which is a 10x10 array filled with 
// the values '#F00' (red). For inspiration, take a look at src/data.js.
Matrix.defaultProps = {
  values: [
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
  ]

}
