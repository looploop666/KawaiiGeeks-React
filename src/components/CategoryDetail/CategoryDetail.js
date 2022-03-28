import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {Item} from "../Item/Item";
import { Button} from "react-bootstrap";
import '../ItemList/ItemList.css';
import '../Item/Item.css';
import '../CategoryDetail/CategoryDetail.css';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const CategoryDetail = () => {
  const { categoryId } = useParams();
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState([]);

    //SE REALIZA EL GET DE LOS ITEMS FILTRADOS POR CATEGORIA
    const getCategories = async () => {
      try {
        const { docs } = await getDocs(query(collection(db, "items"), where("category", "==", categoryId)));
        const parseCategory = docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
        setCategories(parseCategory);
      } catch (error) {
        setError(error);
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