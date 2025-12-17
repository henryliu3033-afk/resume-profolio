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
      <div className="bg-[#F3F4F6] h-screen flex  justify-center items-center">
        <div className="bg-[#FFFFFF] w-[700px] h-[900px] flex flex-col rounded-3xl justify-center items-center overflow-hidden gap-6">
          <form onSubmit={addTodos} className="flex  gap-6">
            <input
              type="text"
              placeholder="type your todo..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="border w-80 overflow-hidden bg-white"
            />
            <button
              type="submit"
              className=" rounded-2xl w-16 bg-green-300 font-bold"
            >
              Add
            </button>
          </form>
          <ul className="">
            {todos.map((todo) => (
              <li key={todo.id} className="flex gap-6">
                <span
                  onClick={() => toggleTodo(todo.id)}
                  className="w-60 text-xl"
                >
                  {todo.title}
                </span>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="w-20 rounded-2xl bg-red-500 font-semibold"
                >
                  delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoList;
