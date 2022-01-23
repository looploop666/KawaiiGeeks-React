import "./itemListContainer.css";
import { ItemCount } from '../itemCount/itemCount'
import { ItemList } from '../ItemList/ItemList'
import { useEffect, useState } from 'react';

export const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    const getProducts = async () => {
        try {
            const response = await fetch('https://coderhouse.franncode.com/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        getProducts();
      }, []);


    return (
        <div className = "itemListContainer">
            <h1>
                {greeting}
            </h1>
     
        <ItemCount stock={25} initial={1}/>

        <ItemList products={products} />

        </div>
    );
};