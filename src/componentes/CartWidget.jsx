import { TiShoppingCart } from "react-icons/ti";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const {cartQuantity}= useContext(CartContext)

    return(
         <Link to="/cart" className="text-dark text-decoration-none">
            <div>
                < TiShoppingCart fontSize={'2rem'} />
                <Badge bg="danger">{cartQuantity()}</Badge>
            </div>
        </Link>
    )
}

export default CartWidget