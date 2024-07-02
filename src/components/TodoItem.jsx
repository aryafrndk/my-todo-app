import React, { useState } from 'react';
import { Check, Trash, Edit, Save } from 'lucide-react';

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className={`flex justify-between items-center p-4 ${todo.completed ? 'bg-gray-200' : 'bg-white'} dark:bg-[#191919] rounded-lg shadow-md mb-2`}>
      <div className={`flex items-center ${todo.completed ? 'line-through text-gray-500' : ''} ${isEditing ? 'dark:text-gray-300' : ''}`}>
        <Check className="mr-2 cursor-pointer" onClick={() => toggleComplete(todo.id)} />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border p-1 rounded dark:bg-gray-700 dark:text-white"
          />
        ) : (
          <span>{todo.text}</span>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {isEditing ? (
          <Save className="text-green-500 cursor-pointer dark:text-green-300" onClick={handleSave} />
        ) : (
          <Edit className="cursor-pointer dark:text-gray-300" onClick={() => setIsEditing(true)} />
        )}
        <Trash className="text-red-500 cursor-pointer dark:text-red-300" onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};

export default TodoItem;
