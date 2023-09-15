import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Row = ({ title, fetchUrl, rowNo }) => {
  const [movie, setMovies] = useState([]);
  const imgUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    axios.get(fetchUrl).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchUrl]);

  const sliderLeft = () => {
    const slider = document.getElementById("slider" + rowNo);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    const slider = document.getElementById("slider" + rowNo);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          className="bg-white left-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 absolute hidden group-hover:block "
          size={40}
        />
        <div
          id={"slider" + rowNo}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movie.map((item, id) => (
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
              <img
                className="w-full h-auto block"
                src={imgUrl + item.poster_path}
                alt={item?.title}
              />

              <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:bg-black/80 hover:opacity-100">
                <div className="flex justify-center items-center h-full flex-col ">
                  <p className="whitespace-normal  text-xs md:text-sm font bold text-center mb-1">
                    <Link
                      to="/detail"
                      state={{ name: item?.title,
                       overView: item?.overview,
                       image:item.backdrop_path,
                       posterImg:item.poster_path,
                       releaseDate: item?.release_date,
                       rating:item.vote_average,
                       review:item.vote_count ,

                       language:item.original_language,
                      }}
                    >
                      {item?.title}
                    </Link>
                  </p>
                  <p className="white-space-normal text-center text-xs md:text-sm font-semibold">
                    Rating : {item.vote_average}/10
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className="bg-white right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 absolute hidden group-hover:block "
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
