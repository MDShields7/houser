import React, { Component } from 'react'
import axios from 'axios';

import {Link} from 'react-router-dom';
import House from '../House/House'
import './Dashboard.css'

export default class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            houses: [],
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        // this.postHouse = this.postHouse.bind(this);
    }
    componentDidMount(){
        axios.get('/api/houses').then(response => {
            console.log('dashboard.js, componentDidMount, response.data', response.data)
            this.setState({
                houses: response.data
            })
        })
    }
    deleteHouse (houseId){
        // const {id} = this.pr  ops;
        axios.delete(`/api/houses/${houseId}`)
        .then(response => {
            console.log('dashboard.js, deleteHouse, response.data', response.data)
        })
    }
    render() {
        const {houses} = this.state;
        const housesView = houses.map(elem => <House key={elem.key} id={elem.id} name={elem.name} price={elem.price} image_url={elem.image_url} city={elem.city} address={elem.address} state={elem.state} deleteHouse={this.deleteHouse}/>)

        console.log('Dashboard.js, this.state',this.state)
        return (
        <div>
            <button onClick={this.componentDidMount}>Check State</button>
            <div className='dashboard-dash'>
                Dashboard
                <Link to="/wizard"><button>Add New Property</button></Link>
            </div>
            <div className='house-container'>
                
                {housesView}
            </div>
        </div>
        )
    }
};


// postHouse (){
//     const {name, address, city, state, price, image_url} = this.props;
//     axios.post('/api/houses', {name, address, city, state, price, image_url})
//     .then(response => {console.log(response)});
//     this.componentDidMount();
// };
// dummyPostHouse (){
//     console.log('dashboard.js, dummyPostHouse')
//     let name='White House'
//     let address='1786 Penn Ave'
//     let city='DoC'
//     let state='NA'
//     let price=20500000
//     let image_url='https://amp.businessinsider.com/images/5a86ef49d030721a008b4602-750-563.jpg';
//     axios.post('/api/houses', {name, address, city, state, price, image_url})
//     .then(response => {console.log(response)});
//     // this.componentDidMount();
// }