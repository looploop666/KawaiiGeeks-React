import { useEffect, useState } from "react";
import "./CategoryListContainer.css";
import { Badge} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const CategoryListContainer = () => {

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  //SE REALIZA EL GET DE LAS CATEGORIAS 
  const getCategories = async () => {
    try {
      const { docs } = await getDocs(query(collection(db, "categories")));
      const parseData = docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setCategories(parseData);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="">
      {categories.map((category) => (
        <div className= "d-inline-flex" key={category.id}>
           <Link to={`/category/${category.name}`}>
            <Badge pill className= "m-3 bg-secondary">{category.name}</Badge>
          </Link>
        </div>
      ))}
    </div>
  );
};