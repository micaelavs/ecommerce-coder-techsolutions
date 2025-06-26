import { TiShoppingCart } from "react-icons/ti";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const {cart}= useContext(CartContext)
    console.log(cart)

    return(
         <Link to="/cart">
            <div>
                < TiShoppingCart fontSize={'2rem'} />
                <Badge bg="danger">{5}</Badge>
            </div>
        </Link>
    )
}

export default CartWidget