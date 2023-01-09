

function TodoList(props) {
    let todoItems = props.todos.map(todo => {
        return (
            <div 
                key={todo.id} 
                className={todo.completed ? 'complete' : ''}
            >
                ID: <span>{todo.id}</span> | <span>{todo.text}</span> 
                <button onClick={evt => props.todoCompleteCallback(todo.id)}>complete</button> 
                <button onClick={evt => props.todoDeleteCallback(todo.id)}>delete</button>
            </div>
        );
    });

    return (
        <div className="todo-list">
            {todoItems}
        </div>
    );
}

export default TodoList;