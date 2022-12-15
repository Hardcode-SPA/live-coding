

// Komponente zur Anzeige der Todo Items
// Erhaelt seine Kind-Elemente per Props
function TodoList(props) {
    return (
        <div className="todolist">
            {/* Zeige, die uebergebenen Kind-Elemente an */}
            {props.children}
        </div>
    );
}

export default TodoList;