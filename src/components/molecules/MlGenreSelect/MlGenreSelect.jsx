import React, { Component } from "react";
import AtButton from "components/atoms/AtButton";

export class MlGenreSelect extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(genre) {
    if (this.props.onSelect) {
      this.props.onSelect(genre);
    }
  }

  render() {
    const { genres, selectedGenre } = this.props;

    const genreButtons = genres.map((genre) => {
      const isSelected = genre === selectedGenre;
      const buttonClassnames = isSelected
        ? "border-b-4 border-red-500 rounded-none"
        : "";

      return React.createElement(
        AtButton,
        {
          key: genre,
          onClick: () => this.handleSelect(genre),
          className: `${buttonClassnames} text-slate-50`,
          "data-testid": "genre-select",
        },
        genre
      );
    });

    return React.createElement(
      "div",
      { className: "space-x-5 flex items-center" },
      ...genreButtons
    );
  }
}
