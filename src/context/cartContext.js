import { createContext, useState } from 'react';

const initialCartContext = [];

export const CartContext = createContext(initialCartContext);

export const CartProvider = ({children}) => {
    
    const [productsIncorporated, setProductsIncorporated] = useState([]);
    console.log('productsIncorporated 1 :',productsIncorporated); 
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const isInCart = (idNewProduct) => {
        const findItem = productsIncorporated.find((product) => product.id === idNewProduct);
        return findItem;
    };

  const addItem = (product, quantity) => {
    isInCart(product.id) ? setProductsIncorporated(
          productsIncorporated.map((item) => {
            if (product.id === item.id) {
              item.quantity += quantity
            }
            return item;
          })
        )
      : setProductsIncorporated([
          ...productsIncorporated,
          { id: product.id, name: product.title, price: product.price, quantity: quantity },
        ]); 
    const sumItem = product.price * quantity;
    setTotalPrice(totalPrice + sumItem);
    setTotalQuantity(totalQuantity + quantity);
  };

  const removeItem = (id, quantity, price) => {
    setProductsIncorporated(productsIncorporated.filter(item => item.id !== id))
    
    const restItem = quantity * price;
    setTotalPrice(totalPrice - restItem);
    setTotalQuantity(totalQuantity - quantity);
  };

  const clear = () => {
    setProductsIncorporated([]);
    setTotalQuantity(0);
  }

  return (
    <CartContext.Provider value={{ productsIncorporated, addItem, removeItem, clear, totalPrice, totalQuantity }}>
      {children}
    </CartContext.Provider>
     
    );
};