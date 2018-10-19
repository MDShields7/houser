import React, { Component } from 'react'
import axios from 'axios';

import {Link} from 'react-router-dom';
import House from '../House/House'
import './Dashboard.css'

export default class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            houses: [];
        }
    }
componentDidMount(){
    axios.get('./api/inventory').then(response => {
        this.setState({
            houses: response.data
        })
    })
}

  render() {
    return (
      <div>
        <div className='dashboard-dash'>
            Dashboard
            <Link to="/wizard"><button>Add New Property</button></Link>

        </div>
        {House}
      </div>
    )
  }
}
