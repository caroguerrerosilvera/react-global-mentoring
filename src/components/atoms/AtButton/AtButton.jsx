import React, { Component } from 'react';

export class AtButton extends Component {
  render() {
    const { children, className, ...otherProps } = this.props;

    return React.createElement(
      'button',
      {
        className: `p-2 rounded-sm ${className || ''}`,
        ...otherProps,
      },
      children
    );
  }
}

export default AtButton;
