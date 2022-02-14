import { useEffect, useState } from "react";
import "./CategoryListContainer.css";
import { Badge} from "react-bootstrap";
import { Link } from 'react-router-dom';

export const CategoryListContainer = () => {

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  const getCategories = async () => {
    try{
      const response = await fetch("https://fakestoreapi.com/products/categories");
      const data = await response.json();
      setCategories(data);
      
    } catch(error){
      setError(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  console.log(categories);
  return (
    <div className="">
      {categories.map((category) => (
        <div className= "d-inline-flex" key={category}>
           <Link to={`/category/${category}`}>
            <Badge pill className= "m-3 bg-secondary">{category}</Badge>
          </Link>
        </div>
      ))}
    </div>
  );
};