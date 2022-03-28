import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { ItemCount } from "../itemCount/itemCount";
import { Link } from "react-router-dom";
import { Button, Card} from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";



export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [showLoadingProduct , setShowLoadingProduct] = useState(false);
  

  // const getProduct = async () => {
  //   try{
  //     setShowLoadingProduct(true);
  //     const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
  //     const data = await response.json();
  //     setProduct(data);
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setShowLoadingProduct(false);
  //   }

  // };

  const getProduct = async () => {
    try {
      setShowLoadingProduct(true);
      const docRef = doc(db, "items", productId);
      const docSnap = await getDoc(docRef)
      const result = {id: docSnap.id, ...docSnap.data()}
      setProduct(result);
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
                  <div className="container">
                    <Card>
                      
                        <ItemDetail product={product}/>
                    
                        <ItemCount stock={25} initial={1} product={product}/>

                        <Link to="/tienda">
                        <Button variant="secondary">Seguir Comprando</Button>
                        </Link>
                      
                    </Card>
                  </div>
                ) : (
                  <div className="productsLoadingError">
                    <p>No se encontró el producto</p>
                  </div>
                )
            } 
        </div>
  );
};