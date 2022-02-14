import { Card, Button} from "react-bootstrap";
import "./Item.css";
import { Link } from 'react-router-dom';

export const Item = ({ key, id , title, price, description, pictureUrl}) => {

  return (
    
    <div className="item">
        
        <Card style={{ width: "18rem" , height: "25rem"}}>
          <Card.Img variant="top" src={pictureUrl}/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
              <Link to={`/product/${id}`}><Button variant="secondary">Ver detalle del Producto</Button></Link>
          </Card.Body>
        </Card>
      
    </div>
  );
};


