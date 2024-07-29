"use client";
import Image from "next/image";
import { useState } from "react";
import chuckImg from "../public/chuck-norris.png";
import CardJoke from "@/components/CardJoke";
import SearchForm from "@/components/SearchForm";
import CategoriesBox from "@/components/CategoriesBox";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState<string | null>(null);

  return (
    <main className="home">
      <div className="home-content">
        <section className="flex flex-col items-center gap-8">
          <div className="flex flex-col w-full md:flex-row gap-8 items-center justify-center">
            <Image alt="Chuck Norris" src={chuckImg} width={264} height={264} />

            <CardJoke
              joke={joke}
              setJoke={setJoke}
              setLoading={setLoading}
              loading={loading}
            />
          </div>

          <SearchForm setJoke={setJoke} setLoading={setLoading} />

          <CategoriesBox setJoke={setJoke} setLoading={setLoading} />
        </section>
      </div>
    </main>
  );
};

export default Home;
