import React, { Component } from 'react';

export default class OptionBarNbItems extends Component {
  render() {
    const nbGooderPerPageTab = this.props.nbGooderPerPageTab;

    let nbGooderPerPage = [];
    nbGooderPerPageTab.forEach(nb => {
      let classes = 'optButton';
      if (this.props.actualNbGooderPerPage == nb) {
        classes += ' active';
      }
      nbGooderPerPage.push(<button className={classes} onClick={() => this.onButtonClick(nb)}>{nb}</button>)
    })



    return (
      <div>
        <div>
          Gooders par page : {nbGooderPerPage}
        </div>
      </div>
    );
  }

  onButtonClick(nb) {
    this.props.nbGooderPerPageChange(nb)
  }
}

