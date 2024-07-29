import React, { useEffect, useRef, useState } from "react";
import CustomButton from "./ui/Button";
import { fetchRandomJoke } from "@/services/chuck-norris.service";
import Loading from "./Loading";

type CardJokeProps = {
  joke: string | null;
  setJoke: (value: string | null) => void;
  setLoading: (value: boolean) => void;
  loading: boolean;
};

const CardJoke = ({ joke, setJoke, setLoading, loading }: CardJokeProps) => {
  const hasFetchedJoke = useRef(false);

  useEffect(() => {
    const getRandomJoke = async () => {
      if (hasFetchedJoke.current) return;

      hasFetchedJoke.current = true;
      setLoading(true);
      const response = await fetchRandomJoke();
      if (!response.data.data) {
        setJoke("Falha na requisição!!!");
        setLoading(false);
        return;
      }

      setJoke(response.data.data.value);
      setLoading(false);
    };

    getRandomJoke();
  }, [setJoke, setLoading]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    e.preventDefault();

    const response = await fetchRandomJoke();
    if (!response.data.data) {
      console.error("Failed to fetch random joke:", response.data);
    }

    setJoke(response.data.data.value);
    setLoading(false);
  };

  return (
    <div className="card-container">
      <div className="card-joke">
        {loading ? (
          <Loading />
        ) : (
          <>
            <p className="mr-10 text-16 font-ibm-plex-serif">{joke}</p>
            <CustomButton handleClick={handleClick} />
          </>
        )}
      </div>
    </div>
  );
};

export default CardJoke;
