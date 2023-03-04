//React
import React from 'react';
//Imagens
import Crown from '../../Assests/Crown';

function UlMenu() {
  return (
    <ul>
      <li>
        <a href="/">todas categorias</a>
      </li>
      <li>
        <a href="/">supermercado</a>
      </li>
      <li>
        <a href="/">livros</a>
      </li>
      <li>
        <a href="/">moda</a>
      </li>
      <li>
        <a href="/">lançamentos</a>
      </li>
      <li>
        <a href="/">ofertas do dia</a>
      </li>
      <li>
        <a href="/">
          <Crown />
          assinatura
        </a>
      </li>
    </ul>
  );
}

export default UlMenu;
