import React, { useState } from "react";

// Definiera en typ för en uppgift
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
        Add a todo here:
      </h2>
      <div className="flex">
        <input
          type="text"
          className="border-gray-400 p-2 rounded"
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
          <div
            key={task.id}
            className="flex items-center justify-between bg-gray-100 p-4 mb-4 rounded"
          >
            <div>
              <input
                type="checkbox"
                className="mr-2 h-5 w-5"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <span
                className={`text-lg ${task.completed ? "line-through" : ""}`}
              >
                {task.text}
              </span>
            </div>
            <button
              className="ml-3 px-4 py-2 rounded text-white bg-red-800"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
