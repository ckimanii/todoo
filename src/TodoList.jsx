import { useState } from 'react'
    const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
          setTodos([...todos, { text: newTodo.trim(), checked: false }]);
          setNewTodo("");
        }
      };
    return(
        <div>

            <h1>ToDo List</h1>
            
        <input
        type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}  
      />
      <button onClick={handleAddTodo}>Add Task</button>
            
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>      
        {todo.text}
        </li>
        ))}
      </ol>
        </div>
    );
 };
 export default TodoList;