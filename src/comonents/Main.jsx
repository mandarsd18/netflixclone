import axios from "axios";
import React, { useEffect, useState } from "react";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const api_key = "api_key=46d5d12e4b73fa813a99fe6348de50de";
  const baseUrl = "https://api.themoviedb.org/3";
  const endPnt = "/discover/movie?sort_by=popularity.desc&";
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const fetchUrl = baseUrl + endPnt + api_key;

  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(fetchUrl).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  
  return (
    <div className="w-full h-[550px] text-white ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={imgUrl + movie?.backdrop_path}
          alt=""
        ></img>

        <div className="absolute  w-full top-[20%] p-4 md:p-8">
          <h1 className="text-2xl font-bold mb-5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{movie?.title}</h1>

          <div className="mb-2 sm:mb-3 md:mb-5">
            <button className="bg-white text-[13px] text-black py-1 px-2 mr-2 border border-white md:text-[15px] rounded-sm hover:bg-transparent hover:text-white">
              Play
            </button>
            <button className="border text-[13px] border-white py-1 px-2 ml-1 md:text-[15px] rounded-sm hover:bg-white hover:text-black transition-transform">
              Watch Later
            </button>
          </div>

          <p className="text-xs text-gray-400 font-semibold mb-1 md:text-sm ">
            Realeased : {movie?.release_date}
          </p>
          <p className="text-xs mb-3 w-full sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[35%] md:text-sm">
            {movie?.overview?.slice(0, 150)}...
          </p>
        </div>

      </div>
    </div>
  );
};

export default Main;
