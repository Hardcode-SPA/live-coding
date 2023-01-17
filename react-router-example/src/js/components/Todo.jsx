import { useParams } from "react-router-dom";


function Todo() {
    let {todoId} = useParams();

    return (
        <p>Aufgabe Nr. {todoId}: Abwaschen</p>
    );
}

export default Todo;