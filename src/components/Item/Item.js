import { Card, Button} from "react-bootstrap";
import "./Item.css";

export const Item = ({ pictureUrl , title , description, id }) => {

  return (
    <div className="item">

      <Card style={{ width: "18rem" , height: "20rem"}}>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
            <Button variant="primary">Ver detalle del Producto</Button>
        </Card.Body>
      </Card>
    </div>
  );
};


