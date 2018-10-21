import React, { Component } from 'react'

export default class Step1 extends Component {
  constructor(){
      super();
      this.state = {
          name: '',
          address: '',
          city: '',
          state: '',
          zip: 0,
      }
      this.handleChange_nam = this.handleChange_nam.bind(this);
      this.handleChange_adr = this.handleChange_adr.bind(this);
      this.handleChange_cty = this.handleChange_cty.bind(this);
      this.handleChange_sta = this.handleChange_sta.bind(this);
      this.handleChange_zip = this.handleChange_zip.bind(this);
      
      this.cancel = this.cancel.bind(this);
  };
  cancel(){
    this.setState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    })
  };
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

  render() {
    const{name, address, city, state, zip} = this.state;
    return (
      <div>
        
        Property Name:
        <input type="text" value={name} onChange={this.handleChange_nam}/>
        Property Address:
        <input type="text" value={address} onChange={this.handleChange_adr}/>
        Property City:
        <input type="text" value={city} onChange={this.handleChange_cty}/>
        Property State:
        <input type="text" value={state} onChange={this.handleChange_sta}/>     
        Property ZIP:
        <input type="text" value={zip} onChange={this.handleChange_zip}/>     

      </div>
    )
  }
}
