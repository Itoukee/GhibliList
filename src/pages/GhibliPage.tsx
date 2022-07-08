import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { getMovie } from "../services/ghibli.service";
import { IMovie } from "../types/IGhibli";

const GhibliPage = () => {
  const [movies, setMovie] = useState<IMovie[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initPage = async () => {
    try {
      const data = await getMovie();
      setMovie(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!movies) initPage();
  }, []);

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <header className="h-1/5  flex w-full bg-lime-700 justify-center items-center ">
        <h1 className=" font-sans font-bold text-4xl">Ghiblis</h1>
      </header>
      <div className="h-full w-full bg-slate-400">
        <div className="flex flex-wrap grid-cols-3 h-4/5 w-full pt-16 bg-slate-400 justify-center items-center gap-12 ">
          {isLoading ? (
            <Skeleton count={1} />
          ) : (
            movies &&
            movies.map((movie: IMovie) => (
              <div key={movie.id} className="h-64 w-48 bg-gray-900">
                <img className="object-none opacity-50" src={movie.image} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default GhibliPage;
