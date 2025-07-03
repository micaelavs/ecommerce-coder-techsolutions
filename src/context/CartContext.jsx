import { createContext, useState } from "react";

//crear nuestro contexto
export const CartContext = createContext()

// crear el proveedor 
export const CartProvider = ({children}) => {
    
    const [cart, setCart]= useState([])

    const addItem = (item, cantidad) =>{
        
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
            //dejas lo que esta en el carrito y añado el item con su cant
            setCart([...cart, {...item, quantity:cantidad}])
        }
   
    }

    //filtra los que sean distinto a ese prod, es decir los deja en la lista
    const removeItem = (id)=>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    //setea carrito en [] 
    const clear = () =>{
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
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartQuantity, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}