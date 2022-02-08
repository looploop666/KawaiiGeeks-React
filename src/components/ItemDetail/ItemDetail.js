import { Link } from "react-router-dom";
import { Button, Badge, Card} from "react-bootstrap";
import { ItemCount } from "../itemCount/itemCount";

export const ItemDetail = ({ product }) => {
  return (
    <div className="container">
        <Badge pill className= "m-3 bg-secondary">{product.category}</Badge>

        <Card>
          
          <Card.Body>
            <Card.Img variant="top" src={product.image}/>

            <Card.Title className="m-3">{product.title}</Card.Title>

            <Card.Text>
              {product.description}
              <span>${product.price}</span>
            </Card.Text>
            <Card.Text>
              <span>${product.price}</span>
            </Card.Text>
            <div className="">
                    <ItemCount stock={25} initial={1}/>
            </div>
            <Link to="/tienda">
              <Button variant="secondary">Volver</Button>
            </Link>
          </Card.Body>
        </Card>
    </div>
  );
};