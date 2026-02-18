import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./counter/Counter.jsx";
import TodoList from "./todo-list/TodoList.jsx";
import HomePage from "./homepage.jsx";
import WeatherHome from "./weather app/weatherHome.jsx";
import NewsApp from "./News/NewsApp.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />, // App 是 Layout，里面包含 Navbar + <Outlet/>
      children: [
        {
          index: true,
          element: <HomePage />, // 首页 = Counter
        },
        {
          path: "todolist",
          element: <TodoList />,
        },
        {
          path: "counter",
          element: <Counter />,
        },
        {
          path: "weather",
          element: <WeatherHome />,
        },
        {
          path: "news",
          element: <NewsApp />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
