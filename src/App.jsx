//React
import React from 'react';
// //Styles
import './GlobalStyles/App.module.scss';
//Context
import { GlobalProvider } from './Contexts/GlobalContext';
//Components
import AdBar from './Components/AdBar/AdBar';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
//Pages
import Home from './Pages/Home';

function App() {
  return (
    <GlobalProvider>
      <AdBar />
      <Header />
      <Home />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
