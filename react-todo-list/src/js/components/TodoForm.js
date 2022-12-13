import React, {Component} from "react";

class TodoForm extends Component {
    constructor(props) {
        super(props);

        // lokaler State der TodoForm Komponente
        this.state = {
            btnDisabled: true,
            todo: ''
        };

        /* ---------- this-Bindings ---------- */
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    /* Changehandler des Eingabefelds fuer neue Todos */
    handleChange(evt) {
        // Hole Text aus Inputfeld
        let inputText = evt.target.value;

        // Stelle fest, ob Inputfeld leer
        let isEmpty = inputText.trim().length < 1;

        // Setze lokalen State entsprechend
        let newState = {
            todo: inputText,
            btnDisabled: isEmpty
        };
        this.setState(newState);
    }

    /* Submithandler fuer das Formular neuer Todos */
    handleSubmit(evt) {
        evt.preventDefault();

        // Extrahiere den Wert aus dem Eingabefeld
        let newTodo = {
            todo: this.state.todo.trim(),
            done: false
        };

        // Gebe der Elternkomponente das neue Todo Objekt 
        // mit Hilfe des Callbacks aus den Props zurueck
        this.props.newTodoCallback(newTodo);

        // Setze Todo-Text im State zurueck
        this.setState({
            todo: '',
            btnDisabled: true
        })
    }

    /* Rendermethode der TodoForm Komponente */
    render() {
        return(
            /* Formular, dessen onsubmit die Klassenmethode handleSubmit ist */
            <form onSubmit={this.handleSubmit}>
                {/* 
                    Eingabefeld fuer das neue Todo.
                    Der Value kommt immer aus dem lokalen State.
                    Der onchange Handler ist die Klassenmethode handleChange.
                */}
                <input type="text" value={this.state.todo} onChange={this.handleChange} placeholder="Something important..." />
                {/* 
                    Der Submit Button fuer das Formular.
                    Ob er aktiviert ist, regelt der lokale State.
                */}
                <button className="add-todo-btn" type="submit" disabled={this.state.btnDisabled}>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;