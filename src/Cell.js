// Create a new component in src/ called Cell. The Cell component will give us our first chance to use state.
// We want each Cell to keep track of a single state value: color, (which will be a 3 digit hex value i.e. '#FFF').


import React from 'react';

// Define a constructor method in Cell, which sets an initial state key of color to 
// the value prop which is passed from its parent component. Remember to call super() 
// on the first line of the constructor (this is required in React components if we are to use this.state in the constructor). 
//Ultimately, our constructor should look something like this:
// ==>
// constructor(props) {
//   super()
//   this.state = {} // ...define initial state with a key of 'color' set to the 'value' prop
// }

class Cell extends React.Component {
  constructor(props){
    super()
    this.state = {color: props.value}
  }



// Create a click listener which, when activated, 
// updates the state to the following hex value: '#333'


  clickUpdateColor = () => {
  this.setState({
    color:"#333"
  })
  }

  // In render, the cell should set the background color in-line for the <div> 
// by adding the following attribute: style={{backgroundColor: '#FFF'}} 
// ('#FFF' is just used as an example value here - the value should be state's color)
render(){
  return <div className = "cell" 
  style={{backgroundColor: this.state.color}} 
  onClick={this.clickUpdateColor}>
  </div>
}
}




export default Cell;
