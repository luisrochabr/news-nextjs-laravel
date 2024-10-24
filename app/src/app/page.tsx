import NewsList from "@/components/news/NewsList";

export default async function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-8 dark:text-white">
        Últimas Notícias
      </h2>
      <NewsList />
    </div>
  );
}
