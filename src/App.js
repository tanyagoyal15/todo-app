import React , { Component } from 'react';
import './App.css';

import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items : [],
      currentItem : {
        text : '',
        key : ''
      },
      addItem : false
    }
  }

  handleClick = () => {
    this.setState({ addItem : true })
  }

  handleInput = (e) => {
    this.setState({ 
      currentItem : {
        text: e.target.value,
        key : Date.now()
    }
  })
 }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  render() {
    const { items, currentItem , addItem } = this.state;
    return (
      <div className="App">
        <AddTodo 
          items = {items}
          currentItem = {currentItem}
          addItem = {addItem}
          handleClick = {this.handleClick}
          handleInput = {this.handleInput}
          handleSubmit = {this.handleSubmit}
        />
        <TodoList items={this.state.items} />
      </div>
      
    )
  }
}

