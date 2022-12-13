import {Component} from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            /* Might be deleted */
        };

        /* ---------- this-Bindings ---------- */

    }


    render() {
        console.log(this.props.todos);

        /* Erstelle Array von TodoItem Komponenten */
        let todoItems = this.props.todos.map(todo => {
            // Jede TodoItem Komponente erhaelt das entsprechende Todo Objekt als Prop
            // und bekommt den Callback-Handler aus den Props von TodoList ebenfalls als Prop uebergeben
            return <TodoItem 
                key={todo.todo} 
                todo={todo} 
                handleCheckTodo={this.props.handleCheckTodo}
                handleDeleteTodo={this.props.handleDeleteTodo}
            />;
        });

        return (
            <div className="todolist">
                {todoItems}
            </div>
        );
    }
}

export default TodoList;