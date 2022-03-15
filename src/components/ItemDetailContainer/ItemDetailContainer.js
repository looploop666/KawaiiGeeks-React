import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [showLoadingProduct , setShowLoadingProduct] = useState(false);

  const getProduct = async () => {
    try{
      setShowLoadingProduct(true);
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(error);
    } finally {
      setShowLoadingProduct(false);
    }

  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  return (
        <div className="container">
            
            { showLoadingProduct ? (
                <div className="productsLoading">
                    <p>Cargando producto...</p>
                </div>
                
                ) : productId ? (
                  <ItemDetail product={product}/>
                ) : (
                  <div className="productsLoadingError">
                    <p>No se encontró el producto</p>
                  </div>
                )
            } 
        </div>
  );
};