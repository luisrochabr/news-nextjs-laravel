import { fetchNews } from "./fetchNews";

describe("fetchNews", () => {
  beforeEach(() => {
    // Limpa os mocks antes de cada teste
    jest.clearAllMocks();
  });

  it("deve retornar dados de notícias com slug quando a API responde com sucesso", async () => {
    const mockNews = {
      id: 1,
      title: "Notícia com Slug",
      content: "Conteúdo da notícia",
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockNews),
      } as Response)
    );

    const slug = "noticia-1";
    const result = await fetchNews(slug);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `http://localhost:8000/api/news/${slug}`
    );
    expect(result).toEqual(mockNews);
  });

  it("deve retornar dados de notícias filtrados por categoria e busca quando a API responde com sucesso", async () => {
    const mockNews = [
      { id: 1, title: "Notícia Filtrada", content: "Conteúdo da notícia" },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockNews),
      } as Response)
    );

    const category = 5;
    const search = "tecnologia";
    const result = await fetchNews("", category, search);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `http://localhost:8000/api/news?category=${category}&search=${search}`
    );
    expect(result).toEqual(mockNews);
  });

  it("deve retornar um array vazio e logar erro no console quando a API falhar", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404,
      } as Response)
    );

    console.error = jest.fn(); // Mock do console.error

    const result = await fetchNews();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `http://localhost:8000/api/news?category=0&search=`
    );
    expect(result).toEqual([]);
    expect(console.error).toHaveBeenCalledWith(
      "Error fetching news data",
      expect.any(Error)
    );
  });
});
``;
