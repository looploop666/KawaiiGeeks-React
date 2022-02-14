import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {Item} from "../Item/Item";
import { Card, Button} from "react-bootstrap";
import '../ItemList/ItemList.css';
import '../Item/Item.css'
import '../CategoryDetail/CategoryDetail.css'

export const CategoryDetail = () => {
  const { categoryId } = useParams();
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState([]);


  const getCategories = async () => {
    try{
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    const dataFilter = await data.filter(
      (prod) => prod.category === `${categoryId}`
    );
    
    console.log("a ver ", dataFilter);
    setCategories(dataFilter);
    }catch{
        setError(error);
        console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, [categoryId]);

  return (
    <div>
        <div className="m-3"><h3>Category: {categoryId}</h3></div>
        <div className="itemList">
            {categories.map((prod) => (
                <div key={prod.id} >
                <Item key={prod.id} id={prod.id} title={prod.title} price={prod.price} description={prod.description} pictureUrl={prod.image} />
                </div>
            ))}
           
        </div>
        <Link to="/tienda">
            <Button variant="secondary">Volver al catálogo</Button>
        </Link>
    </div>
  );
};