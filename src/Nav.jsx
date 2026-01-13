import { Link } from "react-router-dom";

function Navigator() {
  return (
    <>
      <div className="w-56 bg-slate-900 text-slate-200 h-screen sticky top-0">
        <ul className="flex flex-col gap-6 px-6 pt-10 text-lg">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/counter">Counter App</Link>
          </li>
          <li>
            <Link to="/todolist">TodoList</Link>
          </li>
          <li>
            <Link to="/weather">Weather App</Link>
          </li>
          <li>
            <Link to="/news">News App</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigator;
