import { Link } from "react-router-dom";

function Navigator() {
  return (
    <>
      <div className="w-52 bg-gray-700 h-screen text-gray-300 z-50 flex justify-center sticky">
        <ul className=" flex flex-col justify-center items-center text-2xl gap-8">
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
