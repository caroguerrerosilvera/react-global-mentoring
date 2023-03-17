import React, { Component } from 'react';

export class AtInput extends Component {
  render() {
    const { type, placeholder, className, ...otherProps } = this.props;

    const mergedStyles = className
      ? `${className}`
      : 'bg-[#323232]';

    return React.createElement(
      'input',
      {
        type: type || 'text',
        className: mergedStyles,
        placeholder: placeholder || '',
        ...otherProps,
      }
    );
  }
}
