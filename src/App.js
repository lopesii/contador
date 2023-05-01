import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
  };

  counter = () => {
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  counterMenos = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <>
        <div>
          <h1>Contador</h1>
          <h2>{this.state.count}</h2>
          <div className="buttons">
            <button onClick={this.counter}>+</button>
            <button onClick={this.counterMenos}>-</button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
