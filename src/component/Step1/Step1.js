import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {updateName, updateAddress, updateCity, updateState, updateZip} from '../../ducks/reducer'
import wizRoutes from '../Wizard/Wizard'

class Step1 extends Component {
  constructor(){
      super();
      this.state = {
          // name: '',
          // address: '',
          // city: '',
          // state: '',
          // zip: 0,
      }
      this.handleChange_nam = this.handleChange_nam.bind(this);
      this.handleChange_adr = this.handleChange_adr.bind(this);
      this.handleChange_cty = this.handleChange_cty.bind(this);
      this.handleChange_sta = this.handleChange_sta.bind(this);
      this.handleChange_zip = this.handleChange_zip.bind(this);
      this.cancel = this.cancel.bind(this);
  };
  cancel(){
        this.props.updateName('');  
        this.props.updateAddress('');  
        this.props.updateCity('');  
        this.props.updateState('');  
        this.props.updateZip('');  
  };
  handleChange_nam(e){
    this.props.updateName(e.target.value)
  };
  handleChange_adr(e){
    this.props.updateAddress(e.target.value)
  };
  handleChange_cty(e){
    this.props.updateCity(e.target.value)
  };
  handleChange_sta(e){
    this.props.updateState(e.target.value)
  };

  render() {
    const{name, address, city, state, zip} = this.props;
    const{updateName, updateAddress, updateCity, updateState, updateZip} = this.props;
    console.log(this.props)
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

        <Link path='/wizard/step2'><button>To Step Two</button></Link>
      </div>
    )
  }
}

function mapStateToProps ( state ){
  const {updateName, updateAddress, updateCity, updateState, updateZip} = state;
    return {
      updateName,
      updateAddress,
      updateCity,
      updateState,
      updateZip,
    }
};

export default connect (mapStateToProps, {updateName , updateAddress, updateCity, updateState, updateZip})(Step1);
