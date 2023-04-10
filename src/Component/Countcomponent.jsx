import React from "react";

class Countcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  buttonIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  buttonDecrement = () => {
    if(this.state.count > 0){
        this.setState({ count: this.state.count - 1 });
    } else {
        this.setState({ count: this.state.count = 0 });
    }    
  };

  buttonReset = () => {
    this.setState({ count: this.state.count = 0 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.buttonIncrement}> + </button>
        <button onClick={this.buttonDecrement}> - </button>
        <button onClick={this.buttonReset}>Reset</button>
      </div>
    );
  }
}

export default Countcomponent;
