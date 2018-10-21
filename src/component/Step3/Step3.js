import React, { Component } from 'react'

export default class Step3 extends Component {
  constructor(){
    super();
    this.state = {
        mortgage: 0,
        rent: 0
    };
    this.handleChange_mor = this.handleChange_mor.bind(this);
    this.handleChange_ren = this.handleChange_ren.bind(this);
    this.cancel = this.cancel.bind(this);
};
cancel(){
  this.setState({
      mortgage: 0,
      rent: 0
  })
};


  render() {
    const{mortgage, rent} = this.state;
    return (
      <div>
        
        Property Mortgage:
        <input type="text" value={mortgage} onChange={this.handleChange_mor}/>
        Property Rent:
        <input type="text" value={rent} onChange={this.handleChange_ren}/>

      </div>
    )
  }
}
