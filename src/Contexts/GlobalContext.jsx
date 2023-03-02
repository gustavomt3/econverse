//React
import React from 'react';

//Create Context
export const GlobalContext = React.createContext({});

//Provider Components
export const GlobalProvider = (props) => {
  return (
    <GlobalContext.Provider value={{}}>{props.children}</GlobalContext.Provider>
  );
};
