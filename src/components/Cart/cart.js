import { Link } from "react-router-dom";
import { Button, Badge, Card} from "react-bootstrap";
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
            <div className="itemList">
                {productsIncorporated.map((product) => {
                    <article className="item">
                        <Card style={{ width: "25rem" , height: "18rem"}}>
                            <Card.Img variant="top" src={product.pictureUrl}/>
                            <Card.Body>
                                <Card.Title>{product.title.substring(0,50) + "..."}</Card.Title>
                                <Card.Text>
                                {product.description.substring(0,150) + "..."}
                                {product.quantity + "unidad/es"}
                                </Card.Text>
                                <Button variant="warning" onClick={() => removeItem(product.id, product.quantity, product.price)}> Eliminar </Button>
                            </Card.Body>
                        </Card>
                    </article>
                })}
                <Button variant="outline-danger" onClick={() => clear()}>Vaciar carrito</Button>
                <Button variant="outline-success" gap="3">Finalizar Compra</Button>
            </div>
        );
    };
};