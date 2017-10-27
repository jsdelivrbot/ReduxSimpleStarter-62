import React, { Component } from 'react';
import geocoder from 'geocoder';

geocoder.geocode("Nantes", function (err, data) {
  console.dir(data.results[0]);
});

export default class OptionBarLocation extends Component {
  render() {

    if (!this.props.nbPages) return <div>Loading...</div>;

    let pagesNumbers = [];
    for(let i=1; i <= this.props.nbPages; i++) {
      pagesNumbers.push(
        <button
          className="optButton"
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
    this.props.nbPageActive(nb)
  }
}