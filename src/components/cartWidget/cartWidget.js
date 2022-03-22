import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

export const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext);

  return (
    <div className="">
      <Link to={`/cartDetail`}>
        {totalQuantity === 0 ? (
          <div>
            <FaShoppingCart />
          </div>
        ) : (
          <div>
            <FaShoppingCart />
            <Badge pill className="">
              {totalQuantity}
            </Badge>
          </div>
        )}
      </Link>
    </div>
  );
};
