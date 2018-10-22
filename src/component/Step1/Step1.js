import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {updateName} from '../../ducks/reducer'

class Step1 extends Component {
  constructor(){
      super();
      this.state = {
          name: '',
          address: '',
          city: '',
          stateName: '',
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
        this.state.name('');  
        this.state.address('');  
        this.state.city('');  
        this.state.state('');  
        this.state.zip(0);  
  };
  handleChange_nam(e){
    this.setState({name:e.target.value
  })
};
  handleChange_adr(e){
    this.setState({address:e.target.value
  })
};
  handleChange_cty(e){
    this.setState({city:e.target.value
  })
};
  handleChange_sta(e){
    this.setState({stateName:e.target.value
  })
};
  handleChange_zip(e){
    this.setState({zip:e.target.value
  })
};

  render() {
    const{name, address, city, stateName, zip} = this.props;
    // const{updateName, updateAddress, updateCity, updateState, updateZip} = this.props;
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
        <input type="text" value={stateName} onChange={this.handleChange_sta}/>     
        Property ZIP:
        <input type="text" value={zip} onChange={this.handleChange_zip}/>     

        <Link to='/wizard/step2' onClick={this.props.updateName(this.state)}><button>To Step Two</button></Link>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  const {name} = state;
    return {
      name
    }
};

export default connect (mapStateToProps, {updateName})(Step1);

//updateName , updateAddress, updateCity, updateState, updateZip
