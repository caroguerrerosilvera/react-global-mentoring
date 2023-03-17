import React, { Component } from 'react';

export class AtButton extends Component {
  render() {
    const { children, className, ...otherProps } = this.props;

    return React.createElement(
      'button',
      {
        className: `rounded-xl ${className}`,
        ...otherProps,
      },
      children
    );
  }
}

export default AtButton;
