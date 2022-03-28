import "./itemListContainer.css";
import { ItemList } from '../ItemList/ItemList'
import { useEffect, useState } from 'react';
import { CategoryListContainer } from "../CategoryListContainer/CategoryListContainer";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [showLoading, setShowLoading] = useState(false);

    //GET A TODOS LOS PRODUCTOS. MUESTRO LA LISTA DE PRODUCTOS Y LA LISTA DE CATEGORIAS
    const getProducts = async () => {
        try {
          setShowLoading(true);
          const { docs } = await getDocs(query(collection(db, "items")));
          const parseData = docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setProducts(parseData);
        } catch (error) {
          setError(error);
        } finally {
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