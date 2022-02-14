import "./itemListContainer.css";
import { ItemCount } from '../itemCount/itemCount'
import { ItemList } from '../ItemList/ItemList'
import { useEffect, useState } from 'react';
import { CategoryListContainer } from "../CategoryListContainer/CategoryListContainer";

export const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [showLoading, setShowLoading] = useState(false);

    const getProducts = async () => {
        try {
            setShowLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            setError(error);
        } finally{
            setShowLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
      }, []);

    return (

        <div className = "itemListContainer">
            <div className="greeting">
            <h1>
                {greeting}
            </h1>
            </div>
     
            <CategoryListContainer/>
        
            { showLoading ? (
                <div className="productsLoading">
                    <p>Cargando productos...</p>
                </div>
                ) : products.length ? (
                    <ItemList products={products} />
                ) : (
                    <div className="productsLoadingError">
                    <p>No se encontraron productos</p>
                    </div>
                )
            }
        </div>
    );
};