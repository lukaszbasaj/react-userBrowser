import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import { twitterAccounts } from '../../data/twitterAccounts';

console.log(twitterAccounts[0].name)



const ListWrapper = () => (
  <ul className="ListWrapper__wrapper">
    <ListItem
      name={twitterAccounts[0].name}
      image={twitterAccounts[0].image}
      description={twitterAccounts[0].description}
      link={twitterAccounts[0].twitterLink} />
    <ListItem />
    <ListItem />
    <ListItem />
  </ul>
);

export default ListWrapper;
