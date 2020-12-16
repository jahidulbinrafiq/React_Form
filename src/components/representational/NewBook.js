import React, { Component } from 'react';

class NewBook extends Component{
    constructor(props){
        super(props);
        this.state={
            bookName:'',
            writerName:'',
            description:''
        }
        this.handleOnChange=this.handleOnChange.bind(this)
    }
   handleOnChange=event => {
      const name=event.target.name
      const value=event.target.value
      this.setState({
          [name]:value
      })
   }
   handleSubmit=(event)=>{
     console.log(this.state)
     event.preventDefault()
   }

//    componentDidMount() {
//        console.log(this.state)
//    }

// controlled Form =>state manage the form

    render(){
        return (
            <div>
                <form onSubmit={(event)=>this.handleSubmit(event)}>
                    <label>New Book</label>
                    <br/>
                    <input 
                       type="text" 
                       name="bookName" 
                       value={this.state.bookName}
                    //    onChange={(event)=>{this.handleOnChange(event)}}
                     onChange={this.handleOnChange}
                    />
                    <br/>
                    <label>Writer Name</label>
                    <br/>
                    <input 
                       type="text" 
                       name="writerName"
                       value={this.state.writerName}
                    //    onChange={(event)=>{this.handleOnChange(event)}}
                    onChange={this.handleOnChange}
                    />
                    <br/>
                    <label>Book Description</label>
                    <br/>
                    <textarea 
                      name="description"
                      value={this.state.description}
                    //   onChange={(event)=>{this.handleOnChange(event)}}
                    onChange={this.handleOnChange}
                      ></textarea>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default NewBook;