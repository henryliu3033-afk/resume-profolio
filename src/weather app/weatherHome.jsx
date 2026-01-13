import Taiwan from "../assets/taiwan.svg";
import Ping from "../assets/ping.png";
import React, { useState, useEffect } from "react";

function WeatherHome() {
  const Coordinates = {
    Taipei: { X: "77%", Y: "5%" },
    Taichung: { X: "50%", Y: "28%" },
    Taoyuan: { X: "65%", Y: "6%" },
    Tainan: { X: "36%", Y: "55%" },
    Hualien: { X: "73%", Y: "35%" },
    Taidong: { X: "60%", Y: "58%" },
    Nantou: { X: "55%", Y: "35%" },
  };
  const [select, setSelect] = useState("Taipei");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function fetchWeather(city) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=zh_tw&appid=dbfe12e7bbd28047839724f17eb5fdce`
        );
        if (!response.ok) {
          throw new Error(`HTTP Error! status:${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchWeather(select);
  }, [select]);
  if (loading) return <div>Loading...</div>;

  function handleSelect(e) {
    setSelect(e.target.value);
  }

  return (
    <>
      return (
      <div className="flex justify-center">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8">
          {/* 🌦 Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Taiwan Weather</h1>

            <select
              value={select}
              onChange={handleSelect}
              className="border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {Object.keys(Coordinates).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* 🗺 Map */}
          <div className="relative flex justify-center mb-8">
            <img src={Taiwan} alt="Taiwan Map" className="w-100" />

            <img
              src={Ping}
              alt="ping"
              className="absolute w-6"
              style={{
                left: Coordinates[select].X,
                top: Coordinates[select].Y,
              }}
            />
          </div>

          {/* 📊 Weather Info */}
          {data && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-slate-50 rounded-xl p-4 shadow-sm">
                <p className="text-slate-500 text-sm mb-1">Weather</p>
                <p className="text-xl font-semibold">{data.weather[0].main}</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 shadow-sm">
                <p className="text-slate-500 text-sm mb-1">Humidity</p>
                <p className="text-xl font-semibold">{data.main.humidity}%</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 shadow-sm">
                <p className="text-slate-500 text-sm mb-1">Wind Speed</p>
                <p className="text-xl font-semibold">{data.wind.speed} m/s</p>
              </div>
            </div>
          )}
        </div>
      </div>
      );
    </>
  );
}

export default WeatherHome;
