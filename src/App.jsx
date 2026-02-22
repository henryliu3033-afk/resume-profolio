import { Outlet } from "react-router-dom";
import Navigator from "./Nav.jsx";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0a0f1e] relative">

      {/* Mobile overlay backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Navigator isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Mobile top bar */}
        <header className="md:hidden flex items-center gap-4 px-5 py-4 bg-[#0d1426] border-b border-white/10">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-slate-300 hover:text-white transition"
            aria-label="Open menu"
          >
            {/* Hamburger icon */}
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <span className="text-white font-semibold tracking-widest text-sm uppercase">Portfolio</span>
        </header>

        {/* Page content */}
        <main className="flex-1 p-5 md:p-8 lg:p-12 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
