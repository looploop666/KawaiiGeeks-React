import { Card, Button} from "react-bootstrap";
import "./Item.css";
import { Link } from 'react-router-dom';

export const Item = ({ key, id , title, price, description, pictureUrl}) => {

  return (
    
    <div className="item">
        
        <Card style={{ width: "18rem" , height: "18rem"}}>
          <Card.Img variant="top" src={pictureUrl}/>
          <Card.Body>
            <Card.Title>{title.substring(0,50) + "..."}</Card.Title>
            <Card.Text>
              {description.substring(0,150) + "..."}
            </Card.Text>
              <Link to={`/product/${id}`}><Button variant="secondary">Ver detalle del Producto</Button></Link>
          </Card.Body>
        </Card>
      
    </div>
  );
};


