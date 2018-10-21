import React, { Component } from 'react'
import axios from 'axios'
import {Switch, Link, Route} from 'react-router-dom';

import Step1 from '../Step1/Step1'
import Step2 from '../Step2/Step2'
import Step3 from '../Step3/Step3'
import './Wizard.css'

export default class Wizard extends Component {
    constructor(){
        super();
        this.state = {

        }
        // this.dummyPostHouse = this.dummyPostHouse.bind(this);
        // this.postHouse = this.postHouse.bind(this);
        // this.cancel = this.cancel.bind(this);
    };

    // postHouse (){
    //     // const {name, address, city, state, price, image_url} = this.state;
    //     axios.post('/api/houses', {name, address, city, state, price, image_url})
    //     .then(response => {console.log('wizard.js, postHouse, response',response)});
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
    // };
    // handleInput = (e) => {
    //     const name = e.target.name
    //     const value = e.target.value
    //     this.setState({[name]: value})
    // }
    

  render() {
    //   const{name, address, city, state, price, image_url} = this.state;
      console.log(this.state)
    return (

        <div className='wizard-inputs'>
            <h1>Wizard</h1>
            <Link to="/" onClick={this.cancel}><button>Cancel</button></Link>

            <Switch>
                <Route path='/wizard/' component={Step1}/>
                <Route path='/wizard/step2' component={Step2}/>
                <Route path='/wizard/step3' component={Step3}/>
            </Switch>
            <Link path='/wizard/'><button>To Step One</button></Link>
            <Link path='/wizard/step2'><button>To Step Two</button></Link>
            <Link path='/wizard/step3'><button>To Step Three</button></Link>

        </div>
    )
  }
}


{/* <Link to="/" onClick={this.postHouse}><button>Submit</button></Link>      <button onClick={this.dummyPostHouse}>Add Dummy House</button>  */}

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

        // cancel(){
    //     this.setState({
    //         name: '',
    //         address: '',
    //         city: '',
    //         state: '',
    //         price: 0,
    //         image_url: '',
    //     })
    // };