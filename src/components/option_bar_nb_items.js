import React, { Component } from 'react';

export default class OptionBarNbItems extends Component {
  render() {
    return (
      <div>
        <div>
          Gooders par page :
          <button className="optButton" onClick={() => this.onButtonClick(3)}>3</button>
          <button className="optButton" onClick={() => this.onButtonClick(5)}>5</button>
          <button className="optButton" onClick={() => this.onButtonClick(10)}>10</button>
        </div>
      </div>
    );
  }

  onButtonClick(nb) {
    this.props.nbGooderPerPageChange(nb)
  }
}

