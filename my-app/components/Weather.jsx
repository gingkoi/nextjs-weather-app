import React from "react";
import Image from "next/image";

export const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      {/* Top */}
      <div className="relative flex justify-between mt-12 bg-black/20 backdrop-blur-sm border border-white  rounded-3xl p-5">
        <div className="flex flex-col items-center ">
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">
          {Math.ceil(((data.main.temp.toFixed(0) - 32) * 5) / 9)}&#176;c
        </p>
      </div>
      {/* Bottom */}
      <div className="bg-black/20 backdrop-blur-sm border border-white relative p-8 rounded-3xl">
        <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">
              {Math.ceil(((data.main.feels_like.toFixed(0) - 32) * 5) / 9)}
              &#176;c
            </p>
            <p className="text-xl">Feels like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              {data.main.humidity.toFixed(0)}%
            </p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              {data.wind.speed.toFixed(0)} MPH
            </p>
            <p className="text-xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};
