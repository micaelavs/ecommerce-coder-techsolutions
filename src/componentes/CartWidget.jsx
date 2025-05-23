import { TiShoppingCart } from "react-icons/ti";
import { Badge } from "react-bootstrap";
const CartWidget = () => {
    return(
        <div>
            < TiShoppingCart fontSize={'2rem'} />
             <Badge bg="danger">{5}</Badge>
        </div>
    )
}

export default CartWidget