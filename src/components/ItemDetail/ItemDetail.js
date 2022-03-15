import { Link } from "react-router-dom";
import { Button, Badge, Card} from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const ItemDetail = ({ product }) => {

  return (
    <div className="">

        <Link to={`/category/${product.category}`}>
          <Badge pill className= "m-3 bg-secondary">{product.category}</Badge>
        </Link>
        
          <Card.Body>
            <Card.Img variant="top" src={product.image}/>

            <Card.Title className="m-3">{product.title}</Card.Title>
            <div className="">
                <Card.Text>
                  {product.description}
                </Card.Text>
            </div>
            <Card.Text>
              <span>${product.price}</span>
            </Card.Text>
          </Card.Body>
        
    </div>
  );
};