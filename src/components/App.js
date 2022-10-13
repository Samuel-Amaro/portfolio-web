import NavBar from './NavBar';
import ContentMain from './ContentMain';
import Footer from './Footer';
import React, {useState} from 'react';
import "./App.css";
import ButtonPageUp from './ButtonPageUp';

function App() {
  const [optionTheme, setOptionTheme] = useState("light");
  return (
    <main className='main' data-theme={optionTheme} >
      <NavBar onSetOptionTheme={setOptionTheme}/>
      <ContentMain />
      <Footer />
      <ButtonPageUp />
    </main>
  );
}

export default App;
