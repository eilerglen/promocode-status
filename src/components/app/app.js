import React from 'react';
import styles from './app.module.css';
import { Title } from '../../UI/title/title';
import { Cart } from '../cart';
import {TotalPriceContext, DiscountContext } from '../../services/appContext'
import { TotalPrice } from '../common/total-price';

function App() {

  const [totalPrice, setTotalPrice] = React.useState(0);
  const [discount, setDiscount] = React.useState(null);

  return (
    <div className={styles.app}>
      <TotalPriceContext.Provider value={{totalPrice, setTotalPrice}}>
        <DiscountContext.Provider value={{ discount, setDiscount}}>
          <Title text={'Корзина'} />
          <Cart/>
          <TotalPrice />
        </DiscountContext.Provider>
      </TotalPriceContext.Provider>   
    </div>
  );
}

export default App;