import Button from "../Button/Button"
import * as React from "react"

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editForm: false, todo: props.todo }
  }

  changeName = (e) => {
    let todo = { ...this.state.todo, name: e.target.value }

    this.setState({ todo: todo })
    this.props.updateTodo(todo)
  }

  render() {
    const props = this.props
    const todo = this.state.todo

    return (
      <li className="todo stack-small">
        <div className="c-cb">
          <input id="todo-0" type="checkbox"
                 defaultChecked={todo.completed}
                 onChange={() => props.toggleTodo(todo)}/>

          <label className="todo-label" htmlFor="todo-0">
            {todo.name}
          </label>
        </div>

        <div className="btn-group">
          <Button text="Edit"
                  onClick={() => this.setState({editForm: !this.state.editForm})}
                  class={this.state.editForm && 'btn--active'}
          />
          <Button text="Delete" class="btn--danger" onClick={() => {
            props.removeTodo(todo.id)
          }}/>
        </div>

        {this.state.editForm && <form className="edit-todo">
          <input
            type="text"
            id="edit-todo-input"
            className="input"
            name="text"
            defaultValue={todo.name}
            autoComplete="off"
            onChange={this.changeName}
          />
        </form>}
      </li>
    );
  }
}

// function Todo(props) {
// }

export default Todo;
