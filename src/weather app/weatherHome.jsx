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
      <div className=" h-screen bg-[#F3F4F6] flex justify-center items-center">
        <div className="card w-[700px] h-[1100px] bg[#FFFFFF] rounded-2xl flex flex-col gap-5 bg-gray-300">
          <div className="relative ">
            <div className="">
              <img src={Taiwan} alt="Taiwan" />
            </div>

            <img
              src={Ping}
              alt="ping"
              className="absolute w-15"
              style={{
                left: Coordinates[select].X,
                top: Coordinates[select].Y,
              }}
            />
          </div>
          <div className="flex justify-around text-center items text-2xl ">
            <div>
              <select
                value={select}
                onChange={handleSelect}
                name="city"
                id="Cites"
              >
                {Object.keys(Coordinates).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            {data && (
              <>
                <h1>Weather:{data.weather[0].main}</h1>

                <h2>Humidity:{data.main.humidity}%</h2>
                <h3>Wind Speed:{data.wind.speed}</h3>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherHome;
