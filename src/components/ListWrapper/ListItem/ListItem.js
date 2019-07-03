import React from 'react';
import './ListItem.css';



const ListItem = (props) => (
    <li className="listItem__wrapper">
        <img src={props.image} className="listItem__image" alt="First Person" />
        <div>
            <h2 className="listItem__name">{props.name || 'Ni mom pojęcia kto to'}</h2>
            <p className="listItem__description">{props.description || 'Ni mom pojęcia o co mu chodzi'}</p>
            <a href={props.link} className="listItem__button">visit profile</a>
        </div>
    </li>
);

export default ListItem;