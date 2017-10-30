// Class based components are useful if we need to set a state ti this component
// otherwise, we use functional components

// Example of functional component

import React from 'react';

const OptionBarNbPage = props => {
  if (!props.nbPages) return <div>Loading...</div>;

  let pagesNumbers = [];
  for(let i=1; i <= props.nbPages; i++) {
    let classes = 'optButton';
    if (props.actualNbPage == i) {
      classes += ' active';
    }
    pagesNumbers.push(
      <button
        className={classes}
        onClick={() => onButtonClick(i)}>{i}
      </button>
    )
  }

  const onButtonClick = nb => {
    props.nbPageChange(nb)
  }

  return (
    <div>
      Page : {pagesNumbers}
    </div>
  );
}

export default OptionBarNbPage;

// Example of class based component

// import React, { Component } from 'react';
//
// export default class OptionBarNbPage extends Component {
//   render() {
//     if (!this.props.nbPages) return <div>Loading...</div>;
//
//     let pagesNumbers = [];
//     for(let i=1; i <= this.props.nbPages; i++) {
//       let classes = 'optButton';
//       if (this.props.actualNbPage == i) {
//         classes += ' active';
//       }
//       pagesNumbers.push(
//         <button
//           className={classes}
//           onClick={() => this.onButtonClick(i)}>{i}
//         </button>
//       )
//     }
//
//     return (
//       <div>
//         Page : {pagesNumbers}
//       </div>
//     );
//   }
//
//   onButtonClick(nb) {
//     this.props.nbPageChange(nb)
//   }
// }
