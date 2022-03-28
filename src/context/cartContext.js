import { createContext, useState } from 'react';

const initialCartContext = [];

export const CartContext = createContext(initialCartContext);

export const CartProvider = ({children}) => {
    
    const [productsIncorporated, setProductsIncorporated] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

  //VERIFICO SI UN PRODUCTO YA SE ENCUENTRA ENTRE LOS ELEMENTOS DEL CARRITO
    const isInCart = (idNewProduct) => {
        const findItem = productsIncorporated.find((product) => product.id === idNewProduct);
        return findItem;
    };
  //SI EL PRODUCTO YA SE ENCUENTRA EN EL CARRITO ACTUALIZO SU CANTIDAD, 
  //SINO SE ENCUENTRA ENTRE LOS ELEMENTOS, LO AGREGO A LA LISTA
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
  //SE FILTRA LA LISTA POR LOS IDS DIFERENTES AL SOLICITADO REMOVER Y SE ACTUALIZA LA MISMA.
  const removeItem = (id, quantity, price) => {
    setProductsIncorporated(productsIncorporated.filter(item => item.id !== id))
    
    const restItem = quantity * price;
    setTotalPrice(totalPrice - restItem);
    setTotalQuantity(totalQuantity - quantity);
  };
  //SE VACÍA LA LISTA Y SE RESETEAN LOS ESTADOS DE CANTIDAD Y PRECIO
  const clear = () => {
    setProductsIncorporated([]);
    setTotalQuantity(0);
    setTotalPrice(0);

  }

  return (
    <CartContext.Provider value={{ productsIncorporated, addItem, removeItem, clear, totalPrice, totalQuantity }}>
      {children}
    </CartContext.Provider>
     
    );
};