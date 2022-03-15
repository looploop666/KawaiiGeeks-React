import { createContext, useState } from 'react';

const initialCartContext = [];

export const CartContext = createContext(initialCartContext);

export const CartProvider = ({children}) => {
    
    const [productsIncorporated, setProductsIncorporated] = useState([]);
    const [total, setTotal] = useState(0);

    const isInCart = (idNewProduct) => {
        const findItem = productsIncorporated.includes((product) => product.id === idNewProduct);
        console.log('findItem:',findItem); 
        return findItem;
    };

  const addItem = (product, quantity) => {
    isInCart(product.id) ? setProductsIncorporated(
          productsIncorporated.map((item) => {
            if (product.id === item.id) {
              product.quantity += quantity
            }
            return item;
          })
        )
      : setProductsIncorporated([
          ...productsIncorporated,
          { id: product.id, name: product.title, price: product.price, quantity: quantity },
        ]);
    console.log('productsIncorporated:',productsIncorporated); 
    const sumItem = product.price * quantity;
    setTotal(total + sumItem);
  };

  const removeItem = (id, quantity, price) => {
    setProductsIncorporated(productsIncorporated.filter(item => item.id !== id))
    
    const restItem = quantity * price;
    setTotal(total - restItem);
  };

  const clear = () => {
    setProductsIncorporated([]);
  }

  return (
    <CartContext.Provider value={{ productsIncorporated, addItem, removeItem, clear, total }}>
      {children}
    </CartContext.Provider>
     
    );
};