//React
import React from 'react';
// //Styles
import './GlobalStyles/App.module.scss';
//Context
import { GlobalProvider } from './Contexts/GlobalContext';
//Components
import Header from './Components/Header/Header';
//Pages
import Home from './Pages/Home';
import AdBar from './Components/AdBar/AdBar';

function App() {
  return (
    <GlobalProvider>
      <AdBar />
      <Header />
      <Home />
    </GlobalProvider>
  );
}

export default App;
