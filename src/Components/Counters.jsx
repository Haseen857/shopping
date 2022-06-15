import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDeletes = (counterId) => {
    console.log("caling", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Shopping Card</h1>
        <div style={{ textAlign: "center" }}>
          {this.state.counters.map((counter) => (
            <Counter
              key={counter.id}
              value={counter.value}
              onDelete={this.handleDeletes}
              id={counter.id}
              selected
            ></Counter>
          ))}
        </div>
      </>
    );
  }
}

export default Counters;
