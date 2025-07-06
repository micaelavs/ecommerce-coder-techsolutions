import { createContext, useState } from "react";

//crear nuestro contexto
export const CartContext = createContext()

// crear el proveedor 
export const CartProvider = ({children}) => {
    
    const [cart, setCart]= useState([])
    const [productStocks, setProductStocks] = useState({});

    const addItem = (item, cantidad) =>{
          //descuento el stock local
        setProductStocks(prev => ({
            ...prev,
            [item.id]: (prev[item.id] ?? item.stock) - cantidad
        }));

        if(isInCart(item.id)){
            const carritoActualizado = cart.map((prod)=>{
                if(item.id === prod.id){
                    //sumar las cantidades
                    return {...prod, quantity: prod.quantity + cantidad}
                }
                return prod
            })
            setCart(carritoActualizado)

        }else{
            //dejo lo que esta en el carrito y añado el item con su cant
            setCart([...cart, {...item, quantity:cantidad}])
        }
   
    }

    //filtra los que sean distinto a ese prod, es decir los deja en la lista
    const removeItem = (id)=>{
         //restaurar stock local
        const prod = cart.find(p => p.id === id);
        if (prod) {
            setProductStocks(prev => ({
                ...prev,
                [id]: (prev[id] ?? prod.stock) + prod.quantity
            }));
        }

        setCart(cart.filter((prod)=> prod.id !== id))
    }

    //setea carrito en [] 
    const clear = () =>{
        //devolver stock local de todos los productos
        cart.forEach(prod => {
            setProductStocks(prev => ({
                ...prev,
                [prod.id]: (prev[prod.id] ?? prod.stock) + prod.quantity
            }));
        });
        setCart([])
    }

    const isInCart= (id) =>{
        return cart.some((prod)=> prod.id === id)
    }

    //cantidad de items (sumar cantidades)
    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    };

    //total a pagar
    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity * prod.precio, 0);
    };
    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartQuantity, cartTotal,productStocks }}>
            {children}
        </CartContext.Provider>
    )
}