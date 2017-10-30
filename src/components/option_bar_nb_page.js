import React, { Component } from 'react';

export default class OptionBarNbPage extends Component {
  render() {
    if (!this.props.nbPages) return <div>Loading...</div>;

    let pagesNumbers = [];
    for(let i=1; i <= this.props.nbPages; i++) {
      let classes = 'optButton';
      if (this.props.actualNbPage == i) {
        classes += ' active';
      }
      pagesNumbers.push(
        <button
          className={classes}
          onClick={() => this.onButtonClick(i)}>{i}
        </button>
      )
    }

    return (
      <div>
        Page : {pagesNumbers}
      </div>
    );
  }

  onButtonClick(nb) {
    this.props.nbPageChange(nb)
  }
}
