import React from 'react';
import './ListItem.css';
import personOneImage from '../../../assets/images/person_one.jpeg'



const ListItem = () => (
    <li className="listItem__wrapper">
        <img src={personOneImage} class="listItem__image" alt="First Person" />
        <div>
            <h2 className="listItem__name">video</h2>
            <p className="listItem__description">qwertyui</p>
            <button className="listItem__button">visit twitter page</button>
        </div>
    </li>
);

export default ListItem;