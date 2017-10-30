// Class based components are useful if we need to set a state ti this component
// otherwise, we use functional components

// Example of functional component

import React from 'react';

const OptionBarNbItems = props => {
  const nbGooderPerPageTab = props.nbGooderPerPageTab;

  let nbGooderPerPage = [];
  nbGooderPerPageTab.forEach(nb => {
    let classes = 'optButton';
    if (props.actualNbGooderPerPage == nb) {
      classes += ' active';
    }
    nbGooderPerPage.push(<button className={classes} onClick={() => onButtonClick(nb)}>{nb}</button>)
  })

  const onButtonClick = nb => {
    props.nbGooderPerPageChange(nb)
  }

  return (
    <div>
      <div>
        Gooders par page : {nbGooderPerPage}
      </div>
    </div>
  );
}

export default OptionBarNbItems;

// Example of class based component

// import React, { Component } from 'react';
//
// export default class OptionBarNbItems extends Component {
//   render() {
//     const nbGooderPerPageTab = this.props.nbGooderPerPageTab;
//
//     let nbGooderPerPage = [];
//     nbGooderPerPageTab.forEach(nb => {
//       let classes = 'optButton';
//       if (this.props.actualNbGooderPerPage == nb) {
//         classes += ' active';
//       }
//       nbGooderPerPage.push(<button className={classes} onClick={() => this.onButtonClick(nb)}>{nb}</button>)
//     })
//
//
//
//     return (
//       <div>
//         <div>
//           Gooders par page : {nbGooderPerPage}
//         </div>
//       </div>
//     );
//   }
//
//   onButtonClick(nb) {
//     this.props.nbGooderPerPageChange(nb)
//   }
// }

