import React, { Component, createRef } from 'react';

class UncontrolledForm extends Component {
    // Uncontrolled Form =>directly manage the input field & we use createRef

    constructor(props) {
        super(props);
        this.bookName=createRef()
        this.bookWriter=createRef()
        this.bookDescription=createRef()
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit=(event)=>{  
        // console.log(this.bookName)
        // console.log(this.bookWriter)
        // console.log(this.bookDescription)

        console.log(this.bookName.current.value)
        console.log(this.bookWriter.current.value)
        console.log(this.bookDescription.current.value)
        event.preventDefault()
      }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>New Book</label>
                <br/>
                <input 
                   type="text" 
                   name="bookName" 
                   ref={this.bookName}
                />
                <br/>
                <label>Writer Name</label>
                <br/>
                <input 
                   type="text" 
                   name="writerName"
                   ref={this.bookWriter}
                />
                <br/>
                <label>Book Description</label>
                <br/>
                <textarea 
                  name="description"
                  ref={this.bookDescription}
                  ></textarea>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        );
    }
}

export default UncontrolledForm;