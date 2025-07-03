import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [detalle, setDetail] =useState({})
    const {id} = useParams()
    const [loading, setLoading]= useState(false)
    const [invalid, setInvalid]= useState(false)

  //FIREBASE
  useEffect(()=>{
    setLoading(true)
    //conexion
    const productCollection = collection(db, "productos")

    const docRef = doc(productCollection, id)
    getDoc(docRef)
    .then((res)=>{
      if(res.data()){
        setDetail({id:res.id, ...res.data()})
      }else{
        setInvalid(true)
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[])


    //OPCION USANDO LA MISMA PROMESA QUE ITEMLISTCONTAINER
    // useEffect(()=>{
    //     getProducts()
    //     .then((res)=> setDetail(res.find((item)=> item.id === '02')))
    //     .catch((error)=> console.log(error))
    // },[])

    /*Comentamos esto ya que era para el mock */
    //OPCION 2 CREAR UNA FUNCION QUE ESPERE UN ID POR PARAMETRO
    /*useEffect(()=>{
        setLoading(true)
        getOneProduct(id)
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])
    */
  if(invalid){
        return <div>
          <h1>El producto no existe! 😭</h1>
          <Link to='/' className='btn btn-dark'> Ir a home</Link>
        </div>
  }
  return (
    <>
      {loading ? <LoaderComponent/> : <ItemDetail detalle={detalle}/> }
    </>
  )
}

export default ItemDetailContainer