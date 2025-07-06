import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp, doc, updateDoc, increment} from 'firebase/firestore'
import { db } from '../service/firebase'
import { useForm } from 'react-hook-form'

const Checkout = () => {
    const [orderId, setOrderId]= useState('')
    const {register, handleSubmit, formState:{errors}, getValues}=useForm()
    const {cart, cartTotal, clear, productStocks}= useContext(CartContext)
  
    const finalizarCompra = (dataDelForm) => {
        //incorporamos el stock local en cada item
        const cartConStockActualizado = cart.map(item => ({
            ...item,
            stock: (productStocks[item.id] ?? item.stock)
        }));

        let order = {
            comprador:{
                nombre: dataDelForm.nombre,
                apellido: dataDelForm.apellido,
                direccion: dataDelForm.direccion,
                email: dataDelForm.email,
            },
            compras: cartConStockActualizado,
            total: cartTotal(),
            date: serverTimestamp()
        }
        const ventas = collection(db, "ordenes")
        addDoc(ventas, order)
        .then((res)=>{
            setOrderId(res.id)
            //aca descuento el stock en firestore
            order.compras.forEach(async (item) => {
                const itemRef = doc(db, "productos", item.id); 
                //console.log(itemRef);
                await updateDoc(itemRef, {
                stock: increment(-item.quantity)
                });
            });

            clear()
        })
        .catch((error)=> console.log(error))
    }

    return (
    <>
    {
    orderId 
        ? 
        <div style={{ 
            maxWidth: '600px', 
            margin: '2rem auto' 
            }}>
            <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                textAlign: 'center'
            }}>
            <h2>¡Compra realizada correctamente! 🥳</h2>
            <h4>Tu número de orden es:</h4>
            <h3 className='text-success'>{orderId}</h3>
            </div>
        </div>

        : <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
            <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }}>
                <h2 className="mb-4 text-center">Complete con sus datos</h2>
                <form onSubmit={handleSubmit(finalizarCompra)}>
                    <div className="mb-3">
                        <input className='form-control' type='text' placeholder='Ingrese su nombre'
                            {...register("nombre", {required:true, minLength:3})}/>
                        {errors?.nombre?.type === 'required' && <small className="text-danger">El nombre es obligatorio</small>}
                        {errors?.nombre?.type === 'minLength' && <small className="text-danger">Debe tener al menos 3 caracteres</small>}
                    </div>

                    <div className="mb-3">
                        <input className='form-control' type='text' placeholder='Ingrese su apellido'
                            {...register("apellido", {required:true, minLength:2})}/>
                        {errors?.apellido?.type === 'required' && <small className="text-danger">El apellido es obligatorio</small>}
                        {errors?.apellido?.type === 'minLength' && <small className="text-danger">Debe tener al menos 2 caracteres</small>}
                    </div>

                    <div className="mb-3">
                        <input className='form-control' type='text' placeholder='Ingrese su dirección'
                            {...register("direccion", {required:true, minLength:10, maxLength:35})}/>
                        {errors?.direccion?.type === 'required' && <small className="text-danger">La dirección es obligatoria</small>}
                        {errors?.direccion?.type === 'minLength' && <small className="text-danger">Debe tener al menos 10 caracteres</small>}
                        {errors?.direccion?.type === 'maxLength' && <small className="text-danger">Es demasiado larga</small>}
                    </div>

                    <div className="mb-3">
                        <input className='form-control' type='email' placeholder='Ingrese su correo'
                            {...register("email", {required:true})}/>
                        {errors?.email?.type === 'required' && <small className="text-danger">El correo es obligatorio</small>}
                    </div>

                    <div className="mb-4">
                        <input className='form-control' type='email' placeholder='Repita su correo'
                            {...register("secondemail", {required:true, validate:{equalsMails: mail2 => mail2 === getValues().email}})}/>
                        {errors?.secondemail?.type === 'required' && <small className="text-danger">Debe repetir el correo</small>}
                        {errors?.secondemail?.type === 'equalsMails' && <small className="text-danger">Los correos no coinciden</small>}
                    </div>

                    <button className='btn btn-success w-100' type='submit' disabled={!cart.length}>
                        Finalizar compra
                    </button>
                </form>
            </div>
        </div>
    }
    </>
    )
}

export default Checkout
