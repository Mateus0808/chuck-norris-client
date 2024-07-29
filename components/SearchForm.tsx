import React, { ChangeEvent } from "react";
import { Input } from "./ui/Input";
import { fetchJokeByFreeText } from "@/services/chuck-norris.service";

type SearchFormProps = {
  setJoke: (joke: string) => void;
  setLoading: (loading: boolean) => void;
};

const SearchForm = ({ setJoke, setLoading }: SearchFormProps) => {
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    if (query.length < 3) return;
    setLoading(true);

    const response = await fetchJokeByFreeText(query);
    if (response.data?.message) {
      setJoke(`Nenhuma brincadeira com frase "${query}" encontrada`);
      setLoading(false);
      return;
    }

    setJoke(response.data.data.value);
    setLoading(false);
  };

  return (
    <div className="relative items-center max-w-[364px] h-12 w-full min-w-[200px]">
      <Input placeholder="" onChange={handleChange} />
      <label className="after:content[''] font-ibm-plex-serif pointer-events-none text-14 absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[12px] font-normal leading-tight text-black-1 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-600 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
        Encontre uma piada
      </label>
    </div>
  );
};

export default SearchForm;
