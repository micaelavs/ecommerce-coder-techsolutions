import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
    const [detalle, setDetail] =useState({})
    const {id} = useParams()
    const [loading, setLoading]= useState(false)
    //OPCION USANDO LA MISMA PROMESA QUE ITEMLISTCONTAINER
    // useEffect(()=>{
    //     getProducts()
    //     .then((res)=> setDetail(res.find((item)=> item.id === '02')))
    //     .catch((error)=> console.log(error))
    // },[])

    //OPCION 2 CREAR UNA FUNCION QUE ESPERE UN ID POR PARAMETRO
    useEffect(()=>{
        setLoading(true)
        getOneProduct(id)
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])

  return (
    <>
      {loading ? <LoaderComponent/> : <ItemDetail detalle={detalle}/> }
    </>
  )
}

export default ItemDetailContainer