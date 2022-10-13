import NavBar from './NavBar';
import ContentMain from './ContentMain';
import Footer from './Footer';
import React, {useEffect, useState} from 'react';
import "./App.css";
import ButtonPageUp from './ButtonPageUp';

function App() {
  const [optionTheme, setOptionTheme] = useState("light");

  useEffect(() => {
    setOptionTheme(
      localStorage.getItem("themeOption") === null
        ? "light"
        : localStorage.getItem("themeOption")
    );
  });

  return (
    <main className='main' data-theme={optionTheme} >
      <NavBar onSetOptionTheme={setOptionTheme} optionThemeCurrent={optionTheme}/>
      <ContentMain />
      <Footer />
      <ButtonPageUp />
    </main>
  );
}

export default App;
