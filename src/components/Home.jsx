import React, { Component } from 'react';
//import UserService from '../services/UserService';
// import { Nav } from 'react-bootstrap';

export class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       employee:[]
    }
  }

  componentDidMount(){
    // UserService.getAllEmployee().then((response) => { 
    //   this.setState({employee: response.data})
    // } )
    console.log("component mount");
  }
  
  render() {
    return (  <div>
        console.log("This is Home Page")
        </div>
    )
  }
}

export default Home