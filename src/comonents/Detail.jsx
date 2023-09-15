import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../App.css'

const Detail = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const {
    name,
    overView,
    image,
    releaseDate,
    posterImg,
    rating,
    language,
    review,
  } = location.state;

  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet,id&q=${name}&key=AIzaSyDG0cO1ki7hMPSZrOyWNT_VjmQDrvJhsjI`;

  const videoId = data[0]?.id?.videoId;

  const video = `https://www.youtube.com/embed/${videoId}?autoplay&controls=0`;

  console.log(videoId);
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.items);
    });
  }, []);

  return (
    <>
      <div className="w-full h-full">
        <div className="relative w-full h-[100vh] lg:h-[600px] text-white">
          <div className="absolute w-full h-full lg:h-[600px] bg-black opacity-90 z-10 "></div>

          <div className="absolute flex items-center sm:items-center justify-center w-full h-full z-20 sm:gap-10 flex-wrap">

            <div className='mb-0'>
              <img src={imgUrl + posterImg} alt={name} className="imagePoster sm:w-[300px] mt-4 rounded-sm shadow-lg" />
            </div>

            <div className="detailDiv sm:w-[40%]">
              <h1 className="text-2xl font-bold mb-2 sm:mb-3 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{name}</h1>

              <p className="mb-1 sm:mb-2 text-sm font-semibold text-gray-400 ">
                Realeased Data : <span>{releaseDate}</span>
              </p>

              <p className="sm:text-sm text-xs">{overView}</p>
            </div>
          </div>

          <img
            src={imgUrl + image}
            className="object-cover w-full h-full"
            alt={name}
          />
        </div>

        <div className="w-[90%] sm:w-[80%] mx-auto h-[200px] sm:h-[550px] mt-4 sm:mt-5 md:mt-7 mb-5 md:mb-6">
        <h1 className="text-white text-2xl font-bold mb-2 sm:mb-3 sm:text-3xl mb-3 sm:mb-4 md:mb-6">Trailer :</h1>
          <iframe src={video} className="w-full h-[80%] block rounded-sm"></iframe>
        </div>

      </div>
    </>
  );
};

export default Detail;
