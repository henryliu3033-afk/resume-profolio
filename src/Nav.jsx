import { Link } from "react-router-dom";

function Navigator() {
  return (
    <>
      <div className="w-56 bg-slate-900 text-slate-200 h-screen sticky top-0 ">
        <ul className="flex flex-col gap-6 px-6 pt-10 text-lg">
          <li>
            <Link
              to="/"
              className="text-slate-300 hover:text-indigo-400 transition"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/counter"
              className="text-slate-300 hover:text-indigo-400 transition"
            >
              Counter App
            </Link>
          </li>
          <li>
            <Link
              to="/todolist"
              className="text-slate-300 hover:text-indigo-400 transition"
            >
              TodoList
            </Link>
          </li>
          <li>
            <Link
              to="/weather"
              className="text-slate-300 hover:text-indigo-400 transition"
            >
              Weather App
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className="text-slate-300 hover:text-indigo-400 transition"
            >
              News App
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigator;
