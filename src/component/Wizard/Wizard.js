import React, { Component } from 'react'
import './Wizard.css'

export default class Wizard extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            price: null,
            image_url: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            name: e.target.value,
        })
    }
  render() {
      const{name, address, city, state, price, image_url} = this.state;
    return (
      <div className='wizard-inputs'>
        <h1>Wizard</h1>
        Property Name:
        <input type="text" value={name} onChange={this.HandleChange}/>
        Property Address:
        <input type="text" value={address} onChange={this.HandleChange}/>
        Property City:
        <input type="text" value={city} onChange={this.HandleChange}/>
        Property State:
        <input type="text" value={state} onChange={this.HandleChange}/>
        Property Price:
        <input type="text" value={price} onChange={this.HandleChange}/>
        Property Link (copy URL):
        <input type="text" value={image_url} onChange={this.HandleChange}/>
      </div>
    )
  }
}
