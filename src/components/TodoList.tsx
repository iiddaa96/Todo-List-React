import React, { useState } from "react";
import TodoItem from "./TodoItem";

// Definiera typen för en uppgift
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  // State för att hålla listan med uppgifter
  const [tasks, setTasks] = useState<Task[]>([]);
  // State för att hålla texten i input fältet
  const [inputText, setInputText] = useState<string>("");

  // Funktion för att lägga till en ny uppgift
  const addTask = () => {
    if (inputText.trim() !== "") {
      const newTask: Task = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputText("");
    }
  };

  // Funktion för att markera en uppgift som slutförd
  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Funktion för att ta bort en uppgift
  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-center text-white mb-4 text-lg md:mt-8 underline">
        Add a todo:
      </h2>
      <div className="flex">
        <input
          type="text"
          className="border-gray-400 p-2 rounded ml-6 w-70"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 ml-3"
        >
          Add
        </button>
      </div>

      <div className="w-full max-w-md mt-4">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onToggleCompletion={() => toggleTaskCompletion(task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;