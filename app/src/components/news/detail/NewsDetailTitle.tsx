import { Button } from "@/components/ui/button";
import { AiOutlineAccountBook, AiOutlineShareAlt } from "react-icons/ai";

interface NewsDetailTitleProps {
  headline: string;
  publishedAt: string;
}

const NewsDetailTitle = ({ headline, publishedAt }: NewsDetailTitleProps) => {
  return (
    <div className="my-5">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold mb-4 dark:text-gray-50">
          {headline}
        </h2>
        <div>
          <Button
            size={"icon"}
            className="dark:bg-white dark:text-gray-900 rounded-full"
          >
            <AiOutlineShareAlt className="mr-2" />
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm mb-4 dark:text-gray-50">
        <p>{new Date(publishedAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export { NewsDetailTitle };
