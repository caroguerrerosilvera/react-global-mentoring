import React from "react";
import AtButton from "components/atoms/AtButton";

export class MlCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  }

  decrement() {
    this.setState((state) => ({
      value: state.value - 1,
    }));
  }

  render() {
    return React.createElement(
      "div",
      { className: "space-x-6 text-xl" },
      React.createElement(
        AtButton,
        {
          onClick: this.decrement,
          className: "w-[45px] bg-red-500 text-white",
        },
        "-"
      ),
      React.createElement(
        "span",
        { "data-testid": "counter" },
        this.state.value
      ),
      React.createElement(
        AtButton,
        {
          onClick: this.increment,
          className: "w-[45px] bg-red-500 text-white",
        },
        "+"
      )
    );
  }
}
