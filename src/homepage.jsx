import React, { useState } from "react";

function HomePage() {
  const [lang, setLang] = useState("Zh");

  const texts = {
    Zh: {
      welcomeTitle: "歡迎來到我的作品集",
      subtitle: "這是一個集合多個前端練習作品的工具型應用，展示我在 React、UI 設計與資料處理上的能力。",
      ps5: "PS5 虛擬網站",
      ps5desc: "這是虛擬的PS5商品展示網站",
      rent: "租車網站",
      rentdesc: "這是虛擬的租車平台，含 RWD 響應式設計",
      github: "GitHub",
      githubdesc: "查看所有專案原始碼與開發紀錄",
      visit: "前往查看 →",
    },
    en: {
      welcomeTitle: "Welcome to my Portfolio",
      subtitle: "A collection of front-end practice projects, showcasing my skills in React, UI design, and data handling.",
      ps5: "PS5 Virtual Website",
      ps5desc: "A virtual PS5 product showcase website",
      rent: "Rent Car Website",
      rentdesc: "A virtual car rental platform with full RWD",
      github: "GitHub",
      githubdesc: "View all source code and development history",
      visit: "Visit →",
    },
  };

  const t = texts[lang];

  const projects = [
    {
      href: "https://fake-ps5-webpage-wire.vercel.app/",
      title: t.ps5,
      desc: t.ps5desc,
      tag: "React · CSS",
      color: "from-blue-500/20 to-indigo-500/10",
      border: "border-blue-500/20",
      dot: "bg-blue-400",
    },
    {
      href: "https://rent-car-project-gpq3.vercel.app/",
      title: t.rent,
      desc: t.rentdesc,
      tag: "React · RWD",
      color: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/20",
      dot: "bg-emerald-400",
    },
    {
      href: "https://github.com/henryliu3033-afk",
      title: t.github,
      desc: t.githubdesc,
      tag: "Open Source",
      color: "from-violet-500/20 to-purple-500/10",
      border: "border-violet-500/20",
      dot: "bg-violet-400",
      span2: true,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">

      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <p className="text-[11px] tracking-[0.3em] text-indigo-400 uppercase mb-2">Frontend Developer</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {t.welcomeTitle}
          </h1>
          <p className="mt-3 text-slate-400 max-w-lg text-sm leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Language toggle */}
        <button
          onClick={() => setLang(lang === "Zh" ? "en" : "Zh")}
          className="shrink-0 ml-4 text-xs text-slate-400 hover:text-indigo-400 transition border border-white/10 rounded-lg px-3 py-2 bg-white/5 hover:bg-white/10"
        >
          {lang === "Zh" ? "EN" : "中文"}
        </button>
      </div>

      {/* Tech stack badges */}
      <div className="flex flex-wrap gap-2 mb-10">
        {["React", "Tailwind CSS", "React Router", "REST API", "RWD"].map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <a
            key={p.href}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className={`
              group relative rounded-2xl p-6 border bg-gradient-to-br
              ${p.color} ${p.border}
              hover:scale-[1.02] hover:border-opacity-50
              transition-all duration-300 cursor-pointer
              ${p.span2 ? "md:col-span-2" : ""}
            `}
          >
            {/* Dot accent */}
            <div className={`w-2 h-2 rounded-full ${p.dot} mb-4`} />

            <h2 className="text-white font-semibold text-lg mb-1 group-hover:text-indigo-300 transition">
              {p.title}
            </h2>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">{p.desc}</p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 border border-white/10 rounded-full px-3 py-1 bg-white/5">
                {p.tag}
              </span>
              <span className="text-indigo-400 text-sm group-hover:translate-x-1 transition-transform duration-200">
                {t.visit}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
