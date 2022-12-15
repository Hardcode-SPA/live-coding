
function TodoItem(props) {

    function handleCheckTodo(evt) {
        let todo = props.todo;
        todo.done = !todo.done;

        // Rufe den Callback-Handler aus den Props auf
        props.handleCheckTodo(todo);
    }

    function handleDeleteTodo(evt) {
        console.log('Delete!');
        props.handleDeleteTodo(props.todo);
    }


    let todoSpanClass = props.todo.done ? 'done' : '';
    let doneButtonText = props.todo.done ? 'Uncheck' : 'Check';

    return (
        <div className="todoitem">
            {/* <input type="checkbox" /> */}

            <span className={todoSpanClass}>{props.todo.todo}</span>
            <div>
                {/* 
                    Done-Button ruft click-Handler aus TodoItem Komponente auf
                */}
                <button onClick={handleCheckTodo}>{doneButtonText}</button>
                <button onClick={handleDeleteTodo}>Delete</button>
            </div>
        </div>
    );
}


export default TodoItem;