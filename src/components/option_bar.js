import React from 'react';
import OptionBarNbItems from './option_bar_nb_items';
import OptionBarNbPage from './option_bar_nb_page';
import OptionBarLocation from './option_bar_location';

const OptionBar = props => {
  return (
    <div>
      <div>{props.nbGooders} Gooders</div>
      <OptionBarNbItems
        actualNbGooderPerPage={props.actualNbGooderPerPage}
        nbGooderPerPageTab={props.nbGooderPerPageTab}
        nbGooderPerPageChange={props.nbGooderPerPageChange}
      />
      <OptionBarNbPage
        actualNbPage={props.actualNbPage}
        nbPages={props.nbPages}
        nbPageChange={props.nbPageChange}
      />
      <OptionBarLocation
        actualLocation={props.actualLocation}
        locationsTab={props.locationsTab}
        locationChange={props.locationChange}
      />
    </div>
  );
}

export default OptionBar;

