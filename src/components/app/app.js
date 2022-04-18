import React from 'react';
import styles from './app.module.css';
import { Title } from '../../UI/title/title';
import { Cart } from '../cart';

function App() {
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [discount, setDiscount] = React.useState(null);

  return (
    <div className={styles.app}>
    <Title text={'Корзина'} />
    <Cart
     setTotalPrice={setTotalPrice}
     totalPrice={totalPrice}
     setDiscount={setDiscount}
     discount={discount}
    />
    </div>
  );
}

export default App;