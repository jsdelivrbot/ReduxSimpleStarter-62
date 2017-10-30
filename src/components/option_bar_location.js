import React, { Component } from 'react';

export default class OptionBarLocation extends Component {
  render() {
    const locationsTab = this.props.locationsTab;
    let locations = [];
    for(let key in locationsTab) {
      locations.push(
        <button
          className="optButton"
          onClick={() => this.onButtonClick(locationsTab[key])}>{key}
        </button>
      )
    }

    return (
      <div>
        <div>
          filtrer par lieu : {locations}
        </div>
      </div>
    );

  }

  onButtonClick(location) {
    this.props.locationChange(location)
  }
}