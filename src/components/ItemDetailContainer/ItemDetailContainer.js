
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");

  console.log("product id" , productId);

  const getProduct = async () => {
    try{
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      console.log("data", data)
      setProduct(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  console.log("Product:",product);
  return (
        <div className="container">
          <div className="">
                <div className="">
                  <ItemDetail product={product} />
                </div>
                
          </div>
        </div>
  );
};