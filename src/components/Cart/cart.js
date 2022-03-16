import { Link } from "react-router-dom";
import { Button, Card} from "react-bootstrap";
import { ItemCount } from "../itemCount/itemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import emptyCart from "./empty-cart.jpg";

export const Cart = ( ) => {

    const { productsIncorporated, removeItem, clear, total } = useContext(CartContext);

    if (productsIncorporated.length === 0){
        return(
            <div className="emptyCart">
          <p>
            <strong>El carrito está vacío!</strong>
          </p>
          <img src={emptyCart} className="emptyCartEmpty" />
          <Link to="/tienda">
            <Button variant="primary">Volver a la tienda</Button>
          </Link>
        </div>
        )

    }else{
        return(
            <>
            <div className="">
                
                {productsIncorporated.map((product) => (
                        <div className="d-inline-block">
                            <Card className="">
                                <Card.Body className="">
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>{"Precio por Unidad: $" + product.price}</Card.Text>
                                    <Card.Text>{product.quantity + " unidad/es"}</Card.Text>
                                    <Button variant="warning" onClick={() => removeItem(product.id, product.quantity, product.price)}> Eliminar </Button>
                                </Card.Body>
                            </Card>
                        </div>
                  
                ))}
                
            </div>
            <Button variant="outline-danger" onClick={() => clear()}>Vaciar carrito</Button>
            <Button variant="outline-success" gap="3">Finalizar Compra</Button>
            <Link to="/tienda"><Button variant="secondary">Seguir Comprando</Button></Link>
            </>
        );
    };
};