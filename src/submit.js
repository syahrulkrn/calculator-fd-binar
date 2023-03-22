import React, { Component } from 'react'
import './App.css';

class Submit extends Component{
  state = {value: ''}
  handleChange = e =>{
    this.setState({value: e.target.value})
  }

  handleSubmit = e =>{
    alert(`Nama yang kamu masukan adalah ${this.state.value}`)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
       <label>
        name:<input type="text" value={this.state.value} onChange={this.handleChange} />
       </label> 
       <input type='submit' value='submit'/>
      </form>
    )
  }
}

export default Submit;
