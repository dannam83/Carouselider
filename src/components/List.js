import React from 'react';

import ListMedia from './ListMedia';
import './List.css';

const List = ({ media }) => {
  return (
    <div className="List-div">
      <label className="List-headline">Recent Articles</label>
      { media.map((m) => <ListMedia media={m} key={m.id}/>) }
    </div>
  )
}

export default List;
