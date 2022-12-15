
// Komponente zur Darstellung eines Todos
function TodoItem(props) {

    // Clickhandler fuer den Check-Button des Todos
    function handleCheckTodo(evt) {
        // lokale Kopie des ueber Props uebergebenen Todos
        let todo = {...props.todo};

        // Toggle den Check-Indikator
        todo.done = !todo.done;

        // Rufe den Callback-Handler aus den Props auf
        // und uebergebe das bearbeitete Todo
        props.checkTodoCallback(todo);
    }

    // Clickhandler fuer den Delete-Button des Todos
    function handleDeleteTodo(evt) {
        // Rufe den Callback-Handler aus den Props auf
        // und uebergebe das Todo aus den Props
        props.deleteTodoCallback(props.todo);
    }

    // Setze Klasse des Todo-Spans abhaengig von Check-Zustand
    let todoSpanClass = props.todo.done ? 'done' : '';

    // Setze Button-Text des Check-Buttons abhaengig vom Check-Zustand
    let doneButtonText = props.todo.done ? 'Uncheck' : 'Check';

    
    return (
        <div className="todoitem">
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