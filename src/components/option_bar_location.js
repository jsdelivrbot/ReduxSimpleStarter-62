// Class based components are useful if we need to set a state ti this component
// otherwise, we use functional components

// Example of functional component

import React from 'react';

const OptionBarLocation = props => {
  const locationsTab = props.locationsTab;
  let locations = [];
  for(let key in locationsTab) {
    let classes = 'optButton';
    if (props.actualLocation == locationsTab[key]) {
      classes += ' active';
    }
    locations.push(
      <button
        className={classes}
        onClick={() => onButtonClick(locationsTab[key])}>{key}
      </button>
    )
  }

  const onButtonClick = location => {
    props.locationChange(location)
  }

  return (
    <div>
      <div>
        filtrer par lieu : {locations}
      </div>
    </div>
  );
}

export default OptionBarLocation;

// Example of class based component

// import React, { Component } from 'react';
//
// export default class OptionBarLocation extends Component {
//   render() {
//     const locationsTab = this.props.locationsTab;
//     let locations = [];
//     for(let key in locationsTab) {
//       let classes = 'optButton';
//       if (this.props.actualLocation == locationsTab[key]) {
//         classes += ' active';
//       }
//       locations.push(
//         <button
//           className={classes}
//           onClick={() => this.onButtonClick(locationsTab[key])}>{key}
//         </button>
//       )
//     }
//
//     return (
//       <div>
//         <div>
//           filtrer par lieu : {locations}
//         </div>
//       </div>
//     );
//
//   }
//
//   onButtonClick(location) {
//     this.props.locationChange(location)
//   }
// }