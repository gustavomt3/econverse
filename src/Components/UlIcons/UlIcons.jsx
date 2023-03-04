//React
import React from 'react';
//Components
import Orders from '../Orders/Orders';
import Wishlist from '../Wishlist/Wishlist';
import Cart from '../Cart/Cart';
import Account from '../Account/Account';

function UlIcons() {
  return (
    <ul>
      <li>
        <Orders />
      </li>
      <li>
        <Wishlist />
      </li>
      <li>
        <Account />
      </li>
      <li>
        <Cart />
      </li>
    </ul>
  );
}

export default UlIcons;
