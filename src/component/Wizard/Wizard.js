import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import './Wizard.css'

export default class Wizard extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0,
            price: 0,
            image_url: '',
            mortgage: 0,
            rent: 0
        }
        this.handleChange_nam = this.handleChange_nam.bind(this);
        this.handleChange_adr = this.handleChange_adr.bind(this);
        this.handleChange_cty = this.handleChange_cty.bind(this);
        this.handleChange_sta = this.handleChange_sta.bind(this);
        this.handleChange_prc = this.handleChange_prc.bind(this);
        this.handleChange_url = this.handleChange_url.bind(this);
        this.dummyPostHouse = this.dummyPostHouse.bind(this);
        this.postHouse = this.postHouse.bind(this);
        this.cancel = this.cancel.bind(this);
    };
    cancel(){
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            price: 0,
            image_url: '',
        })
    };
    postHouse (){
        const {name, address, city, state, price, image_url} = this.state;
        axios.post('/api/houses', {name, address, city, state, price, image_url})
        .then(response => {console.log('wizard.js, postHouse, response',response)});
    };
    dummyPostHouse (){
        console.log('dashboard.js, dummyPostHouse')
        let name='White House'
        let address='1786 Penn Ave'
        let city='DoC'
        let state='NA'
        let price=20500000
        let image_url='https://amp.businessinsider.com/images/5a86ef49d030721a008b4602-750-563.jpg';
        axios.post('/api/houses', {name, address, city, state, price, image_url})
        .then(response => {console.log(response)});
        // this.componentDidMount();
    };
     
    // handleInput = (e) => {
    //     const name = e.target.name
    //     const value = e.target.value
    //     this.setState({[name]: value})
    // }
    
    handleChange_nam(e){
        this.setState({
            name: e.target.value,
        })
    };
    handleChange_adr(e){
        this.setState({
            address: e.target.value,
        })
    };
    handleChange_cty(e){
        this.setState({
            city: e.target.value,
        })
    };
    handleChange_sta(e){
        this.setState({
            state: e.target.value,
        })
    };
    handleChange_prc(e){
        this.setState({
            price: e.target.value,
        })
    };
    handleChange_url(e){
        this.setState({
            image_url: e.target.value,
        })
    };
  render() {
      const{name, address, city, state, price, image_url} = this.state;
      console.log(this.state)
    return (
      <div className='wizard-inputs'>
        <h1>Wizard</h1>
        
        Property Name:
        <input type="text" value={name} onChange={this.handleChange_nam}/>
        Property Address:
        <input type="text" value={address} onChange={this.handleChange_adr}/>
        Property City:
        <input type="text" value={city} onChange={this.handleChange_cty}/>
        Property State:
        <input type="text" value={state} onChange={this.handleChange_sta}/>
        Property Price:
        <input type="text" value={price} onChange={this.handleChange_prc}/>
        Property Link (copy URL):
        <input type="text" value={image_url} onChange={this.handleChange_url}/>
        <Link to="/" onClick={this.postHouse}><button>Submit</button></Link>      <button onClick={this.dummyPostHouse}>Add Dummy House</button> 
        <Link to="/" onClick={this.cancel}><button>Cancel</button></Link>
      </div>
    )
  }
}


// wizPostHouse(){
    //     const{name, address, city, state, price, image_url} = this.state;
    //     let arrText = [name, address, city, state, image_url]
    //     const{postHouse} = this.props;
    //     // for (let i = 0; i < arrText.length; i++){
    //     //     if (arrText[i] === ''){
    //     //         alert('Please fill out all fields')
    //     //     } else if (price === 0){
    //     //         alert('Please fill out all fields')
    //     //     }
    //     // }
    //     postHouse(name, address, city, state, price, image_url);
    // };
