import TodoForm from "./components/TodoForm/TodoForm"
import Filters from "./components/Filters/Filters"
import TodoList from "./components/TodoList/TodoList"
import React from "react";
import {nanoid} from "nanoid"

// As a user, I can
//
// * read a list of tasks.
// * add a task using the mouse or keyboard.
// * mark any task as completed, using the mouse or keyboard.
// * delete any task, using the mouse or keyboard.
// * edit any task, using the mouse or keyboard.
// * view a specific subset of tasks: All tasks, only the active task, or only the completed tasks.

/**
 * firma insolvent?
 * neue firma?
 *  homeoffice 2-3 tage
 *  beide in hamburg?
 *
 * jeden tag grundstück gesucht
 * massiv oder reihenhaus
 *
 * unser haus region?
 * -> berlin, ~500k in berlin außerhalb einfacher
 */

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: nanoid(), completed: false, name: "eat" },
        { id: nanoid(), completed: false, name: "sleep" },
        { id: nanoid(), completed: false, name: "repeat" },
      ],
      filter: null
    }
  }

  addTodo = todo => {
    this.setState(
      { todos: [...this.state.todos, todo] }
    )
  }

  removeTodo = id => {
    this.setState(
      { todos: this.state.todos.filter(todo => todo.id !== id) }
    )
  }

  setFilter = (filter) => {
    this.setState({ filter: filter })
  }

  filterTodos = () => {
    const todos = this.state.todos
    const filter = this.state.filter
    if (filter === null) return todos

    return this.state.todos.filter(todo => todo.completed === (filter === 'completed'))
  }

  toggleTodo = todo => {
    todo.completed = !todo.completed
    const todos = this.state.todos
    const index = todos.indexOf(el => el.id === todo.id)
    todos[index] = todo

    this.setState({todos: todos})
  }

  updateTodo = (todo) => {
    this.setState({todos: [...this.state.todos.filter(el => el.id != todo.id), todo]})
  }

  render() {
    return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>

        <TodoForm addTodo={this.addTodo}/>
        <Filters setFilter={this.setFilter} filter={this.state.filter}/>
        <TodoList todos={this.filterTodos()}
                  removeTodo={this.removeTodo}
                  toggleTodo={this.toggleTodo}
                  updateTodo={this.updateTodo}/>
      </div>
    )
  }
}

export default TodoApp;
