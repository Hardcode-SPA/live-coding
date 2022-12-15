import { useState } from "react";

function TodoForm(props) {
    let [todoText, setTodoText] = useState('');
    let [btnDisabled, setBtnDisabled] = useState(true);

    /* Submithandler fuer das Formular neuer Todos */
    function handleSubmit(evt) {
        // Verhindere Standard-Verhalten des Browsers 
        // fuer das submit-Event (neuladen der Page)
        evt.preventDefault();

        // Extrahiere den Wert aus dem Eingabefeld
        let newTodo = {
            todo: todoText.trim(),
            done: false
        };

        // Gebe der Elternkomponente das neue Todo Objekt 
        // mit Hilfe des Callbacks aus den Props zurueck
        props.newTodoCallback(newTodo);

        // Setze Todo-Text und Button-Aktivierung im State zurueck
        setTodoText('');
        setBtnDisabled(true);
    }

    /* Changehandler des Eingabefelds fuer neue Todos */
    function handleChange(evt) {
        // Hole Text aus Inputfeld
        let inputText = evt.target.value;

        // Stelle fest, ob Inputfeld leer
        let isEmpty = inputText.trim().length < 1;

        setTodoText(inputText);
        setBtnDisabled(isEmpty);
    }

    return (
        /* Formular, dessen onsubmit die Klassenmethode handleSubmit ist */
        <form onSubmit={handleSubmit}>
            {/* 
                Eingabefeld fuer das neue Todo.
                Der Value kommt immer aus dem lokalen State.
                Der onchange Handler ist die Klassenmethode handleChange.
            */}
            <input type="text" value={todoText} onChange={handleChange} placeholder="Something important..." />
            {/* 
                Der Submit Button fuer das Formular.
                Ob er aktiviert ist, regelt der lokale State.
            */}
            <button className="add-todo-btn" type="submit" disabled={btnDisabled}>Add Todo</button>
        </form>
    );
}

export default TodoForm;