import {Component} from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        /* ---------- this-Bindings ---------- */

    }


    render() {
        console.log(this.props.todos);

        let todoItems = this.props.todos.map(todo => {
            return <li key={todo.todo}>{todo.todo}</li>
        });

        return (
            <ul>
                {todoItems}
            </ul>
        );
    }
}

export default TodoList;