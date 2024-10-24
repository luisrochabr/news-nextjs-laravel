import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeContext, ThemeProvider } from "./themeContext";
import React, { useContext } from "react";

const ThemeConsumer = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { isDarkMode, toggleTheme } = themeContext;

  return (
    <div>
      <p data-testid="theme-status">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </p>
      <button data-testid="toggle-button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

describe("ThemeProvider", () => {
  it("should toggle between light and dark mode", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    const themeStatus = screen.getByTestId("theme-status");
    const toggleButton = screen.getByTestId("toggle-button");

    // Inicialmente, deve estar no modo claro
    expect(themeStatus.textContent).toBe("Light Mode");

    // Simular a alternância para o modo escuro
    fireEvent.click(toggleButton);
    expect(themeStatus.textContent).toBe("Dark Mode");

    // Simular a alternância para o modo claro
    fireEvent.click(toggleButton);
    expect(themeStatus.textContent).toBe("Light Mode");
  });
});
