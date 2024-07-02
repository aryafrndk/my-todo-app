import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  // Mengambil data dari localStorage saat komponen dimuat
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Menyimpan data todos ke localStorage setiap kali terjadi perubahan
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
    setTodoText(''); // Reset input text setelah ditambahkan
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-16 bg-white rounded-lg shadow-lg dark:bg-[#2c2c2c] dark:text-white">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <form onSubmit={(e) => { e.preventDefault(); addTodo(todoText); }}>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded dark:bg-[#2c2c2c] dark:text-white"
            placeholder="Add a new task"
          />
          <button
            type="submit"
            className="ml-4 px-4 py-2 rounded-full bg-gray-600 text-white hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-white/70 focus:outline-none"
          >
            Add
          </button>
        </div>
      </form>
      <div>
        {todos.map(todo => (  
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
