import React, { useState } from "react";

function HomePage() {
  const [lang, setLang] = useState("Zh");
  const texts = {
    Zh: {
      welcomeTitle: "歡迎來到我的作品集",
      description: "這是虛擬的ps5網站",
      clickHere: "點擊這裡",
      fakeIrent: "這是虛擬的租車網站",
      github: "我的GitHub",
    },
    en: {
      welcomeTitle: "Welcome to my work-profolio",
      description: "This is a virtual PS5 website",
      clickHere: "Clickhere",
      fakeIrent: "This is fake renting car website",
      github: "My GitHub",
    },
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-10">
          {/* 🌐 Language Switch */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setLang(lang === "Zh" ? "en" : "Zh")}
              className="text-sm text-slate-500 hover:text-indigo-500 transition"
            >
              {lang === "Zh" ? "English" : "繁體中文"}
            </button>
          </div>

          {/* 🧑‍💻 Hero */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">
              {texts[lang].welcomeTitle}
            </h1>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">
              {lang === "Zh"
                ? "這是一個集合多個前端練習作品的工具型應用，展示我在 React、UI 設計與資料處理上的能力。"
                : "This is a collection of front-end practice projects, showcasing my skills in React, UI design, and data handling."}
            </p>
          </div>

          {/* 📦 Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PS5 */}
            <a
              href="https://fake-ps5-webpage-wire.vercel.app/"
              target="_blank"
              className="group bg-slate-50 rounded-xl p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2 group-hover:text-indigo-500">
                PS5 Virtual Website
              </h2>
              <p className="text-slate-600 mb-4">{texts[lang].description}</p>
              <span className="text-indigo-500 text-sm">
                {texts[lang].clickHere} →
              </span>
            </a>

            {/* Rent Car */}
            <a
              href="https://rent-car-project-gpq3.vercel.app/"
              target="_blank"
              className="group bg-slate-50 rounded-xl p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2 group-hover:text-indigo-500">
                Rent Car Website
              </h2>
              <p className="text-slate-600 mb-4">{texts[lang].fakeIrent}</p>
              <span className="text-indigo-500 text-sm">
                {texts[lang].clickHere} →
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/henryliu3033-afk"
              target="_blank"
              className="group bg-slate-50 rounded-xl p-6 hover:shadow-lg transition md:col-span-2"
            >
              <h2 className="text-xl font-semibold mb-2 group-hover:text-indigo-500">
                GitHub
              </h2>
              <p className="text-slate-600 mb-4">
                {lang === "Zh"
                  ? "查看所有專案原始碼與開發紀錄"
                  : "View all source code and development history"}
              </p>
              <span className="text-indigo-500 text-sm">
                {texts[lang].clickHere} →
              </span>
            </a>
          </div>
        </div>
      </div>
      );
    </>
  );
}

export default HomePage;
