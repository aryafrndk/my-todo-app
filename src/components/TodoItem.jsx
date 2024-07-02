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
    <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 ${todo.completed ? 'bg-gray-200' : 'bg-white'} dark:bg-[#191919] rounded-lg shadow-md mb-2`}>
      <div className={`flex items-center w-full sm:w-auto ${todo.completed ? 'line-through text-gray-500' : ''} ${isEditing ? 'dark:text-gray-300' : ''}`}>
        <Check className="mr-2 cursor-pointer w-6 h-6 sm:w-5 sm:h-5" onClick={() => toggleComplete(todo.id)} />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="w-full border p-2 rounded dark:bg-gray-700 dark:text-white"
          />
        ) : (
          <span className="w-full break-words">{todo.text}</span>
        )}
      </div>
      <div className="flex items-center mt-2 sm:mt-0 space-x-2">
        {isEditing ? (
          <Save className="text-green-500 cursor-pointer dark:text-green-300 w-6 h-6 sm:w-5 sm:h-5" onClick={handleSave} />
        ) : (
          <Edit className="cursor-pointer dark:text-gray-300 w-6 h-6 sm:w-5 sm:h-5" onClick={() => setIsEditing(true)} />
        )}
        <Trash className="text-red-500 cursor-pointer dark:text-red-300 w-6 h-6 sm:w-5 sm:h-5" onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};

export default TodoItem;
