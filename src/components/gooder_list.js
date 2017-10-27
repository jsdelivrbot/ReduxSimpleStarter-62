import React from 'react';
import GooderListItem from './gooder_list_item';

const GooderList = props => {
  const gooderItems = props.gooders.map(gooder => {
    return (
      <GooderListItem
        onGooderSelect={props.onGooderSelect}
        gooder={gooder}
      />
    )
  });

  return (
    <div>
      <ul className="col-md-4 list-group">
        {gooderItems}
      </ul>
    </div>
  );
}

export default GooderList;