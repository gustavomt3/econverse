//React
import React from 'react';

//Create Context
export const GlobalContext = React.createContext({});

//Provider Components
export const GlobalProvider = (props) => {
  //Menu Hamburguer
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

  //Fetch
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
      );
      const data = await response.json();
      setData(data.products);
    } catch (err) {
      console.log('error', err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  //Modal
  const [modalCard, setModalCard] = React.useState(null);

  return (
    <GlobalContext.Provider
      value={{
        hamburguer,
        setHamburguer,
        activeHamburguer,
        data,
        setData,
        loading,
        modalCard,
        setModalCard,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
