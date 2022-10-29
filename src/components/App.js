import NavBar from './NavBar';
import ContentMain from './ContentMain';
import Footer from './Footer';
import React, {useState} from 'react';
import "./App.css";
import ButtonPageUp from './ButtonPageUp';
import { ThemeContext } from './ThemeContext';


function App() {
  const [optionTheme, setOptionTheme] = useState({
    theme:
      localStorage.getItem("themeOption") === null
        ? "light"
        : localStorage.getItem("themeOption"),
    toggleTheme: toggleTheme,
  });

  function toggleTheme(themeOption) {
    setOptionTheme((previosState) => {
      return {
        ...previosState,
        theme: themeOption,
        toggleTheme: previosState.toggleTheme,
      };
    });
    localStorage.setItem("themeOption", themeOption);
  }

  return (
    <ThemeContext.Provider value={optionTheme}>
      <ThemeContext.Consumer>
        {({theme, toggleTheme}) => (
          <main className="main" data-theme={theme}>
            <NavBar />
            <ContentMain />
            <Footer />
            <ButtonPageUp />
          </main>
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
}

export default App;
