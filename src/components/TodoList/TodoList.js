import Todo from "../Todo/Todo"

function TodoList(props) {
  return (
    <div>
      <h2 id="list-heading">
        {props.todos.length} tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {props.todos.map(todo => <Todo todo={todo}
                                       key={todo.id}
                                       removeTodo={props.removeTodo}
                                       toggleTodo={props.toggleTodo}
                                       updateTodo={props.updateTodo}
          />
        )}
      </ul>
    </div>
  );
}

export default TodoList;
