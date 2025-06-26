import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import InfoCards from "./InfoCards"; 

const ItemListContainer = (props) => {
  const[data, setData]= useState([])
  const {categoryId} = useParams()
  const [loading, setLoading]= useState(false)

      useEffect(()=>{
          setLoading(true)
          getProducts()
          .then((respuesta)=> {
            if(categoryId){
                setData(respuesta.filter((prod)=> prod.categoria === categoryId))
            }else{
                setData(respuesta)
            }
        })
          .catch((error)=> console.log(error))
          .finally(()=> setLoading(false))
      },[categoryId])

 return (
  <>
    {
      loading ? <LoaderComponent/> : 
      <div>
        <h2 className="text-success d-flex justify-content-center my-4">{props.saludo}</h2>
          {/*Mostrar InfoCards solo si no hay categoría*/}
        {!categoryId && <InfoCards />}
        <ItemList data={data}/>
      </div>
      
    }
    </>
  )
}
export default ItemListContainer