import React, { Component } from 'react';
import Book from './representational/Book';
import '../../src/App.css';
import bookList from '../assets/booklist'
import NewBook from './representational/NewBook';
import { Route } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import UncontrolledForm from './representational/UncontrolledForm';

const styleHeading={
    border:'1px solid red',
    borderRadius:'5px',
    backgroundColor:'red',
    color:'white',
  }
  
class MainComponent extends Component {
  
    state = {
        books:bookList,
        showValue:true
      }
      
      onChangeEvent=(event,index) => {
         const books={...this.state.books[index]}
         books.BookName=event.target.value
         const bookList=[...this.state.books]
         bookList[index]=books
         this.setState({books:bookList})
      }
      
      deleteItem=(index)=> {
        const bookList=[...this.state.books]
        bookList.splice(index,1)
        this.setState({books:bookList})
      }
    
      handleToggle=()=>{
        this.setState({showValue:!this.state.showValue})
      }

      render(){

          return (
              
           <div className='App'>
             <nav className='nav-section'>
                <ul>
                  <li><NavLink to="/" exact activeClassName="selected">Home</NavLink></li>
                  <li><NavLink to="/newBook" activeClassName="selected">controlled Form</NavLink></li>
                  <li><NavLink to="/UncontrolledForm" activeClassName="selected">Uncontrolled Form</NavLink></li>
                </ul>
             </nav>
             <Route path="/" exact render={() =>
                         (this.state.books).map((item,index)=> 
                         <Book 
                          key={item.id}
                          BookName={item.BookName} 
                          Writer={item.Writer}
                          delete={this.deleteItem.bind(this,index)}
                          inputEventHandler={(event)=>this.onChangeEvent(event,index)}
                         />
                       )
            }/>
             <Route path="/newBook" exact component={NewBook}/>
             <Route path="/UncontrolledForm" exact component={UncontrolledForm}/>
           </div>
        );
      }
}

export default MainComponent;