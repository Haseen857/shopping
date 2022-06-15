import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ["haseen", "abbas", "mohseen", "ali", "xyz", "musharraf bhai"],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    let classes = "btn m-3 btn-";
    classes += this.state.count === 0 ? "primary" : "warning"; // dynamically class chage in react js
    // console.log(this.props);

    return (
      <>
        <div className="container">
          {this.props.children}
          <span style={this.styles} className={classes}>
            {this.formatCount()}
          </span>
          <button
            onClick={this.handleIncrement}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
          {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        </div>
      </>
    );
  }

  formatCount() {
    const { count } = this.state; // this is called object destructuring
    return count === 0 ? <h6>Zero</h6> : count;
  }
}

export default Counter;
