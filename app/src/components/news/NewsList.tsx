"use client";

import { fetchNews } from "@/api/fetchNews";
import { NewsItem } from "@/types/news";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";
import { Category } from "@/types/category";

const NewsList = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [category, setCategory] = useState<Category>({ id: 0, name: "Todas" });
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews("", category.id, search);
      setNews(data);
    };

    getNews();
  }, [category.id, search]);

  return (
    <div className="">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 mb-5">
        <SearchBar onSearch={setSearch} />

        <CategoryFilter onCategoryChange={setCategory} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
        {news.length > 0 ? (
          news.map((item: NewsItem) => <NewsCard key={item?.id} item={item} />)
        ) : (
          <p>Nenhuma notícia encontrada.</p>
        )}
      </div>
    </div>
  );
};

export default NewsList;
