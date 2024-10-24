export const fetchNews = async (
  slug: string = "",
  category: number = 0,
  search: string = ""
) => {
  try {
    const basePath = `http://localhost:8000/api/news`;
    const path =
      slug != "" && slug != undefined
        ? `${basePath}/${slug}`
        : `${basePath}?category=${category}&search=${search}`;

    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching news data", error);
    return [];
  }
};
