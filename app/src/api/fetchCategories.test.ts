import { fetchCategories } from "./fetchCategories";

describe("fetchCategories", () => {
  beforeEach(() => {
    // Limpa o mock para garantir que o estado não seja mantido entre os testes
    jest.clearAllMocks();
  });

  it("deve retornar dados de categorias quando a API responde com sucesso", async () => {
    // Mock para simular a resposta bem-sucedida da API
    const mockCategories = [
      { id: 1, name: "Carros" },
      { id: 2, name: "Motos" },
    ];
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockCategories),
      } as Response)
    );

    const result = await fetchCategories();

    // Verificar se o fetch foi chamado corretamente
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:8000/api/categories"
    );

    // Verificar se os dados retornados são os esperados
    expect(result).toEqual(mockCategories);
  });

  it("deve retornar um array vazio e logar erro no console quando a API falhar", async () => {
    // Mock para simular a falha da API
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 500,
      } as Response)
    );

    console.error = jest.fn(); // Mock do console.error

    const result = await fetchCategories();

    // Verificar se o fetch foi chamado corretamente
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:8000/api/categories"
    );

    // Verificar se o resultado foi um array vazio
    expect(result).toEqual([]);

    // Verificar se o erro foi logado no console
    expect(console.error).toHaveBeenCalledWith(
      "Error fetching news data",
      expect.any(Error)
    );
  });
});
