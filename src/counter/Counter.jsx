import { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);

  function handleIncrement() {
    setcount((c) => c + 1);
  }
  function handleDecrement() {
    setcount((c) => c - 1);
  }
  function handleReset() {
    setcount(0);
  }

  return (
    <>
      <div className="bg-gray-400 h-screen f flex justify-center items-center ">
        <div className="w-[500px] h-[600px] rounded-4xl  flex flex-col justify-center items-center bg-gray-300 gap-36">
          <h1 className="text-3xl">count:{count}</h1>
          <div className="flex text-2xl gap-10">
            <button
              className="border w-19 rounded-2xl bg-gray-100 cursor-pointer transition hover:-translate-y-1 hover:bg-green-500"
              onClick={handleIncrement}
            >
              +1
            </button>
            <button
              onClick={handleReset}
              className="border w-28 rounded-2xl cursor-pointer transition hover:-translate-y-1 hover:bg-blue-700"
            >
              reset
            </button>
            <button
              className="border w-19 rounded-2xl bg-gray-400 cursor-pointer transition hover:-translate-y-1 hover:bg-red-500"
              onClick={handleDecrement}
            >
              -1
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
