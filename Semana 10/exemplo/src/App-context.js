import { createContext, useContext, useState } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = createContext({}); // Criei meu estado global

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (name) =>
          name === "dark" ? setTheme(themes.dark) : setTheme(themes.light),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

function App() {
  return (
    // Faz o estado global ser acessado por todo mundo
    <ThemeProvider>
      <Toolbar />
    </ThemeProvider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  // Acesso o estado global
  const context = useContext(ThemeContext);
  console.log(context);
  return (
    <button
      onClick={() => context.setTheme("dark")}
      style={{
        background: context.theme.background,
        color: context.theme.foreground,
      }}
    >
      I am styled by theme context!
    </button>
  );
}

export default App;
