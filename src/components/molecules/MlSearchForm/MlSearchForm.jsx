import React, { Component } from 'react';
import { AtButton, AtInput } from 'components/atoms';

export class MlSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.initialSearchQuery || '',
      placeholder: this.props.placeholder || ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSearch() {
    if (this.props.onSearch) {
      this.props.onSearch(this.state.query);
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }

  render() {
    return React.createElement(
      'div',
      {className: 'space-x-2 flex',},
      React.createElement(AtInput, {
        type: 'text',
        className: 'bg-gray-500 placeholder-zinc-500 p-3 rounded-sm text-slate-50 w-full',
        placeholder: this.state.placeholder || 'Search...',
        value: this.state.query,
        onChange: this.handleInputChange,
        onKeyPress: this.handleKeyPress
      }),
      React.createElement(AtButton, { onClick: this.handleSearch, className: 'bg-red-500 text-white px-5 py-3 rounded-sm', }, 'Search')
    );
  }
}
