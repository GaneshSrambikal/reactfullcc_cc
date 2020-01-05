import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoData from "./todoData";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodoData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          // if (todo.completed === true) {
          //   todo.completed = false;
          // } else {
          //   todo.completed = true;
          // }
          todo.completed = !todo.completed
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }
  render() {
    const todoComponent = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div className="todo-list">
        <h3>TODO List</h3>
        {todoComponent}
      </div>
    );
  }
}

export default App;
