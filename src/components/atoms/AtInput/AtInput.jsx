import React, { Component } from 'react';

export class AtInput extends Component {
  render() {
    const { type, placeholder, className,label, ...otherProps } = this.props;

    const mergedStyles = className
      ? `${className}`
      : 'bg-[#323232]';

      const labelElement = label
      ? React.createElement('label', { htmlFor: otherProps.id }, label)
      : null;

      const inputElement = React.createElement(
        'input',
        {
          type: type || 'text',
          className: mergedStyles,
          placeholder: placeholder || '',
          ...otherProps,
        }
      );

      return React.createElement(
        'div',
        { className: 'w-full' },
        labelElement,
        inputElement
      );
  }
}
