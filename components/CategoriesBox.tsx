import {
  fetchCategories,
  fetchRandomJoke,
} from "@/services/chuck-norris.service";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

type CategoriesBoxProps = {
  setJoke: (value: string | null) => void;
  setLoading: (value: boolean) => void;
};

const CategoriesBox = ({ setJoke, setLoading }: CategoriesBoxProps) => {
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    const getCagetories = async () => {
      setLoadingCategories(true);
      const response = await fetchCategories();
      if (!response.data.categories) return;

      setcategories(response.data.categories);
      setLoadingCategories(false);
    };

    getCagetories();
  }, []);

  const handleClick = async (category: string) => {
    setLoading(true);

    const response = await fetchRandomJoke(category);
    if (!response.data.data) {
      console.error("Failed to fetch random joke:", response.data);
    }

    setJoke(response.data.data.value);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-2">
      {loadingCategories ? (
        <div className="w-full flex-center">
          <Loading />
        </div>
      ) : (
        <ul className="grid grid-cols-5 md:grid-cols-6 gap-4">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleClick(category)}
              className="bg-gray-700 font-ibm-plex-serif border rounded-xl cursor-pointer flex items-center justify-center text-white py-1 px-2 hover:bg-opacity-90 capitalize"
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoriesBox;
