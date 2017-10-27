import React from 'react';
import OptionBarNbItems from './option_bar_nb_items';
import OptionBarNbPage from './option_bar_nb_page';
import OptionBarLocation from './option_bar_location';

const OptionBar = props => {
  return (
    <div>
      <div>{props.nbGooders} Gooders</div>
      <OptionBarNbItems nbGooderPerPageChange={props.nbGooderPerPageChange}/>
      <OptionBarNbPage
        nbPages={props.nbPages}
        nbPageActive={props.nbPageActive}
      />
      <OptionBarLocation />
    </div>
  );
}

export default OptionBar;

