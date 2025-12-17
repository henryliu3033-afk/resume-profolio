import React, { useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";

function NewsApp() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [keyword, setKeyword] = useState("");
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    fetchApi();
  }, [keyword]);

  async function fetchApi(keyword) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${
          keyword || "apple"
        }&lang=en&token=322ac3bf20af136b6c1628680e5c8731`
      );
      if (!response.ok) {
        throw new Error(`HTTP Error! status:${response.status}`);
      }
      const result = await response.json();
      setNews(result.articles);
    } catch (error) {
      setError(error.msg);
    } finally {
      setLoading(false);
    }
  }
  function handleSearch() {
    setKeyword(inputValue);
  }

  return (
    <>
      <div className=" h-screen bg-[#F3F4F6] flex justify-center items-center relative ">
        <form className="absolute top-20 left-200 flex gap-7">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search for News.."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();

                setKeyword(inputValue);
              }
            }}
            className="w-xl h-[30px] border bg-white"
          />
          <button
            type="submit"
            onClick={handleSearch}
            className="bg-green-400 w-28 rounded-2xl cursor-pointer"
            onSubmit={(e) => e.preventDefault()}
          >
            Search
          </button>
        </form>
        <div className=" w-[1300px] h-[900px] bg-green-100 overflow-hidden  ">
          <div className="grid grid-cols-3 gap-8 p-6 auto-rows-fr overflow-y-auto">
            {news.map((item) => (
              <div
                key={item.url}
                className="bg-white rounded-xl shadow p-4 flex flex-col hover:shadow-xl transition cursor-pointer "
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                )}
                <h1 className="font-bold text-lg line-clamp-2 mb-2">
                  {item.title}
                </h1>
                <p className="text-gray-600 text-sm line-clamp-3 grow">
                  {item.description}
                </p>
                <div className="text-xs text-gray-400 mt-3">
                  {item.source?.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsApp;
