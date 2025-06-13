import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
const ItemListContainer = (props) => {
  const[data, setData]= useState([])
  const {categoryId} = useParams()

      useEffect(()=>{
          getProducts()
          .then((respuesta)=> {
            if(categoryId){
                setData(respuesta.filter((prod)=> prod.categoria === categoryId))
            }else{
                setData(respuesta)
            }
        })
          .catch((error)=> console.log(error))
      },[categoryId])

 return (
    <div>
      <h2 className="text-success d-flex justify-content-center my-4">{props.saludo}</h2>
      <ItemList data={data}/>
    </div>
  );
}
export default ItemListContainer