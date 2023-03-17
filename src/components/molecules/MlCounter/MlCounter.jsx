import React from 'react';
import AtButton from 'components/atoms/AtButton';


export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((state) => ({
      value: state.value + 1
    }));
  }

  decrement() {
    this.setState((state) => ({
      value: state.value - 1
    }));
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('span', null, this.state.value),
      React.createElement(AtButton, { onClick: this.decrement }, '-'),
      React.createElement(AtButton, { onClick: this.increment }, '+')
    );
  }
}

