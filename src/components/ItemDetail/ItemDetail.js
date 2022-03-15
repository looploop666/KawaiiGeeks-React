import { Link } from "react-router-dom";
import { Button, Badge, Card} from "react-bootstrap";
import { ItemCount } from "../itemCount/itemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const ItemDetail = ({ product }) => {

  const [showCounter, setShowCounter] = useState(true);
  const [quantityToAdd, setQuantityToAdd] = useState();
  const { addItem } = useContext(CartContext);

  const onAdd = (event) => {
    setQuantityToAdd(event.target.value);
    console.log('quantityToAdd:', quantityToAdd);
    setShowCounter(false);
    addItem(product,quantityToAdd);
  };



  return (
    <div className="container">

        <Link to={`/category/${product.category}`}>
          <Badge pill className= "m-3 bg-secondary">{product.category}</Badge>
        </Link>
        
        <Card>
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

            {showCounter ? (
                <div className="">
                    <ItemCount stock={25} initial={1} onAdd={onAdd} product={product}/>
                </div>
            ) : (
                <div className="">
                  <p>Producto agregado exitosamente al carrito!</p>

                  <Link to="/cartDetail">
                    <Button variant="secondary">Volver al carrito</Button>
                  </Link>
                </div>
            )}

            <Link to="/tienda">
              <Button variant="secondary">Volver</Button>
            </Link>
          </Card.Body>
        </Card>
    </div>
  );
};