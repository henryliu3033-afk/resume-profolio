import React, { useState } from "react";

function HomePage() {
  const [lang, setLang] = useState("Zh");
  const texts = {
    Zh: {
      welcomeTitle: "歡迎來到我的作品集",
      description: "這是虛擬的ps5網站",
      clickHere: "點擊這裡",
      fakeIrent: "這是虛擬的租車網站",
    },
    en: {
      welcomeTitle: "Welcome to my work-profolio",
      description: "This is a virtual PS5 website",
      clickHere: "Clickhere",
      fakeIrent: "This is fake renting car website",
    },
  };
  return (
    <>
      <div className="h-screen bg-[#F3F4F6] flex justify-center items-center">
        <div className=" bg-[#FFFFFF] w-[700px] h-[600px] flex flex-col justify-center items-center gap-9 relative">
          <div className=" absolute top-4 right-4">
            <button onClick={() => setLang(lang === "Zh" ? "en" : "Zh")}>
              {lang === "Zh" ? "English" : "繁中"}
            </button>
          </div>
          <h1 className="text-2xl font-bold">{texts[lang].welcomeTitle}</h1>
          <h2 className="text-2xl flex gap-4  ">
            {texts[lang].description}
            <a
              href="https://fake-ps5-webpage-wire.vercel.app/"
              className="text-purple-900 hover:text-green-700 "
            >
              {texts[lang].clickHere}
            </a>
          </h2>
          <h2 className="text-2xl flex gap-4  ">
            {texts[lang].fakeIrent}
            <a
              href="https://rent-car-project-gpq3.vercel.app//"
              className="text-purple-900 hover:text-green-700 "
            >
              {texts[lang].clickHere}
            </a>
          </h2>
        </div>
      </div>
    </>
  );
}

export default HomePage;
