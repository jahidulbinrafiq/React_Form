import React, { Component } from 'react';
import { withRouter } from 'react-router';
import '../../stylesheets/Book.css'

class Book extends Component {
    render(){
       console.log(this.props)
        return (
            <div className='book'>
            <h3 onClick={this.props.delete}>Book Name:{this.props.BookName}</h3>
            <h3>Writer:{this.props.Writer}</h3>
            <input 
              type='text' 
              defaultValue={this.props.BookName} 
              onChange={this.props.inputEventHandler} 
            />    
        </div>
        )
    }
}

export default withRouter(Book);