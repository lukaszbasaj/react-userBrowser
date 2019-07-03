import React from 'react';
import PropTypes from 'prop-types';
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
                <h2 className="listItem__name">{name}</h2>
                <p className="listItem__description">{description}</p>
                <a href={twitterLink} rel="noopener noreferrer" target="_blank" className="listItem__button">my favourite webpage</a>
            </div>
        </li>
    );


ListItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    twitterLink: PropTypes.string,
}

ListItem.defaultProps = {
    description: 'Some random awesome person'
}


export default ListItem;


