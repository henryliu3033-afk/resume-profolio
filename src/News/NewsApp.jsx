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
      <div className="flex justify-center">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-md p-8">
          <form
            className="flex gap-4 mb-8"
            onSubmit={(e) => {
              e.preventDefault();
              setKeyword(inputValue);
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search for news..."
              className="flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white px-6 rounded-xl hover:bg-indigo-600 transition"
            >
              Search
            </button>
          </form>

          {/* 📰 Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <div
                key={item.url}
                className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer flex flex-col"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-40 w-full object-cover"
                  />
                )}

                <div className="p-4 flex flex-col flex-1">
                  <h2 className="font-semibold text-lg line-clamp-2 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-slate-600 line-clamp-3 flex-1">
                    {item.description}
                  </p>
                  <span className="text-xs text-slate-400 mt-4">
                    {item.source?.name}
                  </span>
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
