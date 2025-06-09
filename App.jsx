import React from "react";
import './Style.css'; 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  Decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="counter-container">
        <h1 className="counter-title">Account Count</h1>
        <div className="counter-buttons">
          <button onClick={this.Decrement} disabled={this.state.count === 0}>-</button>
          <h1 className="counter-value">{this.state.count}</h1>
          <button onClick={this.Increment} disabled={this.state.count === 10}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
