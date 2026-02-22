import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/",        label: "Home",        icon: "⌂" },
  { to: "/counter", label: "Counter",     icon: "◎" },
  { to: "/todolist",label: "Todo List",   icon: "✓" },
  { to: "/weather", label: "Weather",     icon: "◈" },
  { to: "/news",    label: "News",        icon: "◉" },
];

function Navigator({ isOpen, onClose }) {
  const location = useLocation();

  return (
    <aside
      className={`
        fixed md:sticky top-0 left-0 z-30
        h-screen w-64 md:w-56
        bg-[#0d1426] border-r border-white/10
        flex flex-col
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
    >
      {/* Logo / Brand */}
      <div className="px-6 pt-8 pb-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-indigo-400 uppercase mb-1">Developer</p>
            <h1 className="text-white font-bold text-xl tracking-tight">Portfolio</h1>
          </div>
          {/* Close button on mobile */}
          <button
            onClick={onClose}
            className="md:hidden text-slate-400 hover:text-white transition"
          >
            ✕
          </button>
        </div>
        {/* Status dot */}
        <div className="flex items-center gap-2 mt-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs text-slate-400">Available for work</span>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
        {navItems.map(({ to, label, icon }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              onClick={onClose}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                transition-all duration-200
                ${isActive
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
                }
              `}
            >
              <span className="text-base w-5 text-center">{icon}</span>
              {label}
              {isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-5 border-t border-white/10">
        <p className="text-xs text-slate-600 text-center tracking-wide">
          © 2024 Henry Liu
        </p>
      </div>
    </aside>
  );
}

export default Navigator;
