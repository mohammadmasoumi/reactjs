import React, { Component, Fragment } from "react";

import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super(props);
    console.log("App - constructor!");
    // this.state = this.props.something;
    this.state = this.state;
  }

  componentDidMount() {
    console.log("App - componentDidMount!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App - componentDidUpdate!");
    console.log("prevProps", prevProps);
    console.log("preState", prevState);

    if (prevProps.counters.length !== this.props.counters.length) {
      console.log("Ajax call and get new data from server!");
    }
  }

  componentWillUnmount() {
    // clean up
  }

  // this doesn't work unless Counter component remove it's local state
  handleReset = () => {
    const counters = this.state.counters.map((c) => ({ ...c, value: 0 }));
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = this.state.counters.map((c) =>
      c.id === counter.id ? { ...c, value: c.value + 1 } : { ...c }
    );
    this.setState({ counters });
  };

  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({ counters });
  };

  render() {
    console.log("App - render!");
    return (
      <Fragment>
        {/* this.state.counters.length */}
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;
