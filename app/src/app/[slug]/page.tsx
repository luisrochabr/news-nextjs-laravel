import { NewsDetailHeader } from "@/components/news/detail/NewsDetailHeader";
import { fetchNews } from "@/api/fetchNews";
import { NewsItem } from "@/types/news";
import { NewsDetailTitle } from "@/components/news/detail/NewsDetailTitle";
import { Badge } from "@/components/ui/badge";

interface NewsDetailspageProps {
  params: {
    slug: string;
  };
}
export const generateStaticParams = async () => {
  const news: NewsItem[] = await fetchNews();
  return news.map((item) => ({
    slug: item.slug,
  }));
};

const NewsDetailsPage = async ({ params }: NewsDetailspageProps) => {
  const newsItem: NewsItem = await fetchNews(params.slug);

  if (!newsItem) {
    return <div>Nenhuma notícia encontrada.</div>;
  }
  return (
    <section className="py-12">
      <article className="max-w-4xl mx-auto p-6 shadow-md border rounded-lg">
        <NewsDetailHeader
          imageUrl={newsItem?.imageUrl}
          headline={newsItem?.headline}
        />

        <NewsDetailTitle
          headline={newsItem?.headline}
          publishedAt={newsItem?.published_at}
        />

        <Badge className="mb-4 py-1 dark:bg-gray-200 dark:text-gray-900">
          {newsItem?.category.name}
        </Badge>

        <p className="mb-4 dark:text-gray-50">{newsItem?.articleBody}</p>
      </article>
    </section>
  );
};

export default NewsDetailsPage;
