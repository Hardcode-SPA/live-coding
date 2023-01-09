import { useEffect, useState } from "react";


function TodoForm(props) {
    let [todoInputValue, setTodoInputValue] = useState('');

    useEffect(() => console.log(todoInputValue), [todoInputValue]);

    function handleInputChange(evt) {
        setTodoInputValue(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        // early return, wenn eingabe leer
        if (todoInputValue.length < 1) return;

        // ueber callback an Elternkomponente durchgeben
        props.newTodoCallback(todoInputValue);

        // Eingabe zuruecksetzen
        setTodoInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={todoInputValue} 
                onChange={handleInputChange}
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-8/12 rounded-md sm:text-sm focus:ring-1" 
                placeholder="Was gibt's zu tun?"
            />
            <button type="submit" className="w-3/12">Add Todo</button>
        </form>
    );
}

export default TodoForm;