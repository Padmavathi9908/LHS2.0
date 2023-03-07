import React, { Component } from 'react'
// import './App.css';

export default class Array extends Component {
    constructor(){
        super();
        this.state = {
            name:"padhu",
            age:1,
            Array:[1,2,3,4,5]
        }
    }
    changeStatus = () => {
        this.setState({age:this.state.age * 2,name:"padhu"
        })

    }
  render() {
    return (
      <div>
       <h1> {this.state.name}</h1>
       <h1>{this.state.age}</h1>
       {/* <h1>{this.state.Array.map((item) =>{
        return item * 2;
        
       })}
       </h1> */}
       <button onClick={this.changeStatus}>change state</button>
      </div>
    )
  }
}
