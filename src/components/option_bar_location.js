import React, { Component } from 'react';

export default class OptionBarLocation extends Component {
  render() {
    const locationsTab = this.props.locationsTab;
    let locations = [];
    for(let key in locationsTab) {
      let classes = 'optButton';
      if (this.props.actualLocation == locationsTab[key]) {
        classes += ' active';
      }
      locations.push(
        <button
          className={classes}
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