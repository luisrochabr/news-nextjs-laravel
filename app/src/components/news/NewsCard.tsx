import { NewsItem } from "@/types/news";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface NewsCardProps {
  item: NewsItem;
}

const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <div className="border p-4 rounded-md shadow-sm">
      <Link href={`/${item.slug}`}>
        <Image
          src={item?.imageUrl}
          alt={item?.headline}
          width={500}
          height={500}
          className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-300"
        />
      </Link>
      <Badge className="py-1 dark:bg-gray-200 dark:text-gray-900">
        {item?.category.name}
      </Badge>
      <div>
        <h2 className="text-xl font-semibold my-3 dark:text-gray-50">
          {item?.headline.substring(0, 65)}
        </h2>
        <p className="mb-4 dark:text-gray-100">
          {item?.articleBody.substring(0, 85)}...
        </p>
      </div>
      <div className="flex justify-end">
        <Link href={`/${item?.slug}`}>
          <Button
            variant="default"
            className="mt-4 md:mt-0 dark:bg-gray-200 dark:text-gray-900"
          >
            Ler mais
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
