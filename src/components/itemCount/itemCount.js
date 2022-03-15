import "./itemCount.css";
import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { Button, Badge, Card} from "react-bootstrap";


export const ItemCount = ({ stock, initial, product}) => {
  const [count, setCount] = useState(initial);
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const { addItem } = useContext(CartContext);
  const [showCounter, setShowCounter] = useState(true);

  const increaseItem = () => {
    const newValue = count + 1
    if (newValue <= stock)
        setCount(newValue)
  };
  
  const decreaseItem = () => {
      const newValue = count - 1
      if(newValue >= initial)
        setCount(newValue)
  };

  const onAdd = () => {
    setQuantityToAdd(count);
    console.log('quantityToAdd:', quantityToAdd);
    setShowCounter(false);
    addItem(product,quantityToAdd);
  };

  return (
    <div>
        {showCounter ? (
            <div className="">
              <div className="m-5">
                <div className="m-3">
                  <h2 className='md-3'>Cantidad</h2>
                  <button className='px-3 mx-3' onClick={decreaseItem}>-</button>
                  <span className='px-2 mx-2'>{count}</span>
                  <button className='px-3 mx-3' onClick={increaseItem}>+</button>
                </div>
                <button className="" onClick={() => onAdd()}>Agregar al carrito</button>
              </div>
            </div>
          ) : (
              <div className="">
                <p>Producto agregado exitosamente al carrito!</p>

                <Link to="/cartDetail">
                <Button variant="secondary">Volver al carrito</Button>
                </Link>
              </div>
        )}
    </div>
  );
  
};