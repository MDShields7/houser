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
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
