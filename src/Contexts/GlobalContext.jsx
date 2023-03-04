//React
import React from 'react';

//Create Context
export const GlobalContext = React.createContext({});

//Provider Components
export const GlobalProvider = (props) => {
  //Login
  const [hamburguer, setHamburguer] = React.useState(false);

  function activeHamburguer() {
    const body = document.querySelector('body');
    setHamburguer(!hamburguer);
    if (!hamburguer) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }

  return (
    <GlobalContext.Provider
      value={{ hamburguer, setHamburguer, activeHamburguer }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
