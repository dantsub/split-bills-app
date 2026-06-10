import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextState {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as ThemeContextState);

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const themeStored = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initial = themeStored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext>
  );
};

export const useTheme = () => useContext(ThemeContext);
