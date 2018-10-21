import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import wizRoutes from '../Wizard/Wizard'

export default class Step2 extends Component {
  constructor(){
    super();
    this.state = {
      image_url: '',
    }
    this.handleChange_url = this.handleChange_url.bind(this);
  };
  handleChange_url(e){
    this.setState({
        image_url: e.target.value,
    })
  };
  cancel(){
    this.setState({
        image_url: '',
    })
};

  render() {
    const{image_url} = this.state;
    return (
      <div>

        Property Price:
        <input type="text" value={image_url} onChange={this.handleChange_url}/>

      </div>
    )
  }
}
