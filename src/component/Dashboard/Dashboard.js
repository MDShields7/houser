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
        this.getHouses = this.getHouses.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
        // this.postHouse = this.postHouse.bind(this);
    }
    componentDidMount(){
        this.getHouses();
    };
    getHouses(){
        axios.get('/api/houses').then(response => {
            console.log('dashboard.js, getHouses, response.data', response.data)
            this.setState({
                houses: response.data
            })
        })
    };
    deleteHouse (houseId){
        axios.delete(`/api/houses/${houseId}`)
        .then( () => this.getHouses())
    };
    // updateHouse (houseId){
    //     axios.delete(`/api/houses/${houseId}`)
    //     .then(response)
    // }
    render() {
        const {houses} = this.state;
        const housesView = houses.map(elem => {
            return(
        <div>
            <House key={elem.key} id={elem.id} name={elem.name} price={elem.price} image_url={elem.image_url} city={elem.city} address={elem.address} state={elem.state} deleteHouse={this.deleteHouse} />
        </div>
        )})

        // console.log('Dashboard.js, this.state',this.state)
        return (
        <div>
            <button onClick={this.componentDidMount}>Check State</button>
            <div className='dashboard-dash'>
                Dashboard
                <Link to="/wizard/step1"><button>Add New Property</button></Link>
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