import React from 'react';
import axios from 'axios';

import './House.css';

export default (props) => {
    // console.log('Houses.js, pprops',props)
    const {key, id, name, address, city, state, price, image_url, deleteHouse} = props;
  return (
    <div className='home-box'>
      <img src={image_url} alt='a home'/>
      <span>{name}</span>
      <span>{address}</span>
      <span>{city}</span>
      <span>{state}</span>
      <span>${price}</span>
      <button onClick={deleteHouse(id)}>Delete</button>
    </div>
  )
}
