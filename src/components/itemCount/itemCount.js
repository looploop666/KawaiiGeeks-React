import "./itemCount.css";

import { useState } from "react";

export const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

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
    const message =`Agregaste ${count} producto`
    count === 1 ? alert(message) : alert(`${message}s`);
  };

  return (
    <div className="m-5">
    <div className="m-3">
      <h2 className='md-3'>Cantidad</h2>
      <button className='px-3 mx-3' onClick={decreaseItem}>-</button>
      <span className='px-2 mx-2'>{count}</span>
      <button className='px-3 mx-3' onClick={increaseItem}>+</button>
    </div>
    <button className="" onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};