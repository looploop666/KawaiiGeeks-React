import { Link } from "react-router-dom";
import { Button, Card, Row, Col} from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import emptyCart from "./empty-cart.jpg";
import "./cart.css";

export const Cart = ( ) => {

    const { productsIncorporated, removeItem, clear, totalPrice } = useContext(CartContext);

    if (productsIncorporated.length === 0){
        return(
        
        <div className="container">
            <h3 className='mt-3 mb-0'><strong>El carrito está vacío!</strong></h3>
            <img src={emptyCart} alt='Empty Cart'className="ImgEmptyCart"/>
            <div>
                <Link to="/tienda">
                    <Button variant="primary">Volver a la tienda</Button>
                </Link>
            </div>
        </div>
        )

    }else{
        return(
            <>
            <div className="">
                
                {productsIncorporated.map((product) => (
                        
                    <Card className="">
                        <Card.Body className="text-start">
                            <Row>
                                <Col><Card.Title>{product.name}</Card.Title></Col>
                                <Col className="text-center">{product.quantity === 1 ? product.quantity + " unidad" : product.quantity + " unidades"}</Col>
                                <Col className="text-end text-info"><h5>{"$" + (product.price * product.quantity).toFixed(2)}</h5></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="outline-warning ms-0" onClick={() => removeItem(product.id, product.quantity, product.price)}> Eliminar </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card> 
                ))}
                
            </div>
            <Card className="">
                        <Card.Body className="text-start">
                            <Row>
                                <Col className="text-end text-secondary">
                                    <h4>Total</h4>
                                    <h5>{"$" + totalPrice}</h5>
                                </Col>
                            </Row>
                        </Card.Body>
            </Card> 
            <Button variant="outline-danger" onClick={() => clear()}>Vaciar carrito</Button>
            <Button variant="outline-success" gap="3">Finalizar Compra</Button>
            <Link to="/tienda"><Button variant="secondary">Seguir Comprando</Button></Link>
            </>
        );
    };
};