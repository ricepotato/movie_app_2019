import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("constructor");
  }
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    console.log("minus");
    this.setState({count:this.state.count - 1});
  }
  componentDidMount(){
    console.log("componentDidMount");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  render (){
    console.log("render");
    return (
      <div>
        <h1>The count is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
