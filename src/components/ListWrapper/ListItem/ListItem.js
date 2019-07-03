import React from 'react';
import './ListItem.css';



const ListItem = ({
    image,
    name,
    description,
    twitterLink
}) => (
        <li className="listItem__wrapper">
            <img src={image} className="listItem__image" alt={name} />
            <div>
                <h2 className="listItem__name">{name || 'Ni mom pojęcia kto to'}</h2>
                <p className="listItem__description">{description || 'Ni mom pojęcia o co mu chodzi'}</p>
                <a href={twitterLink} className="listItem__button">visit profile</a>
            </div>
        </li>
    );

export default ListItem;