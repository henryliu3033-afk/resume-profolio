import { useState, React } from "react";

function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodo] = useState([]);

  function addTodos(e) {
    e.preventDefault();
    if (!text.trim()) return;

    setTodo([...todos, { id: Date.now(), title: text, completed: false }]);

    setText("");
  }

  function toggleTodo(id) {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function removeTodo(id) {
    setTodo(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
          {/* Header */}
          <h1 className="text-2xl font-semibold mb-6 text-center">Todo List</h1>

          {/* Input */}
          <form onSubmit={addTodos} className="flex gap-3 mb-6">
            <input
              type="text"
              placeholder="Add a new task..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 rounded-xl hover:bg-indigo-600 transition"
            >
              Add
            </button>
          </form>

          {/* List */}
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-3"
              >
                <span
                  onClick={() => toggleTodo(todo.id)}
                  className={`cursor-pointer ${
                    todo.completed
                      ? "line-through text-slate-400"
                      : "text-slate-700"
                  }`}
                >
                  {todo.title}
                </span>

                <button
                  onClick={() => removeTodo(todo.id)}
                  className="text-red-500 hover:text-red-600 text-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      );
    </>
  );
}

export default TodoList;
