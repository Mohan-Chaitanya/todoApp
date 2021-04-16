import React from "react";

const Form = ({ todos, setTodos, setInputText, inputText }) => {
    function inputTextHandler(event) {
        setInputText(event.target.value);
    }
    function submitTodoHandler(event) {
        event.preventDefault();
        setTodos([...todos, {
            text: inputText,
            completed: false,
            id: Math.random() * 100
        }]);
        setInputText('');
    }
    return (
        <form onSubmit={submitTodoHandler} >
            <input required placeholder='Whats next' className='formInput' value={inputText} onChange={inputTextHandler} />
            <button type='submit'>Add</button>
        </form>
    )
}

export default Form;