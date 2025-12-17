import { Outlet } from "react-router-dom";
import Navigator from "./Nav.jsx";

function App() {
  return (
    <>
      <div className="flex">
        {/* 左侧固定导航栏 */}
        <Navigator />

        {/* 右侧内容区（自动占满剩余空间） */}
        <div className="flex-1 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
