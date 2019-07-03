import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import { twitterAccounts } from '../../data/twitterAccounts';


const ListWrapper = () => (
  <ul className="ListWrapper__wrapper">
    {twitterAccounts.map(item => (
      <ListItem
        name={item.name}
        image={item.image}
        description={item.description}
        link={item.twitterLink}
      />
    ))}
  </ul>
);

export default ListWrapper;
