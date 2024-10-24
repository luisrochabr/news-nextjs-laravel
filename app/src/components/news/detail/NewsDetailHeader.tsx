"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AiOutlineLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface NewsHeaderProps {
  imageUrl: string;
  headline: string;
}

const NewsDetailHeader = ({ imageUrl, headline }: NewsHeaderProps) => {
  const router = useRouter();

  return (
    <div className="mb-4">
      <Button
        onClick={() => router.back()}
        variant="default"
        className="dark:bg-white dark:text-gray-900 mb-2"
      >
        <AiOutlineLeft />
      </Button>
      {imageUrl && (
        <div className="flex justify-center">
          <Image
            src={imageUrl}
            alt={headline}
            width={640}
            height={480}
            className="rounded-md object-cover"
          />
        </div>
      )}
    </div>
  );
};

export { NewsDetailHeader };
