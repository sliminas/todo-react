import * as React from "react"
import {nanoid} from "nanoid"
import Button from "../Button/Button"

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" }
  }

  onInputChange = (e) => this.setState({ name: e.target.value })
  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo({ name: this.state.name, id: nanoid() })
  }

  render() {
    return (
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label--lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input--lg"
          name="text"
          autoComplete="off"
          onChange={this.onInputChange}
        />

        <Button text={`Add ${this.state.name}`}
                onClick={this.onSubmit}
                class={'btn--primary btn--lg'}
                disabled={this.state.name.trim().length === 0}
        />
      </form>
    )
  }
}

export default TodoForm;
