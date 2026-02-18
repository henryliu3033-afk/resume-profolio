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
      <div className="flex justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-10 text-center">
          {/* Header */}
          <h1 className="text-2xl font-semibold mb-8">Counter</h1>

          {/* Count Display */}
          <div className="text-6xl font-bold text-slate-800 mb-10">{count}</div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6">
            {/* Decrement */}
            <button
              onClick={handleDecrement}
              className="w-14 h-14 rounded-xl border text-2xl hover:bg-slate-100 transition cursor-pointer"
            >
              -
            </button>

            {/* Reset */}
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition cursor-pointer"
            >
              Reset
            </button>

            {/* Increment */}
            <button
              onClick={handleIncrement}
              className="w-14 h-14 rounded-xl border text-2xl hover:bg-slate-100 transition cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      </div>
      );
    </>
  );
}

export default Counter;
