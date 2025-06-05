import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
  const[data, setData]= useState([])
  
      useEffect(()=>{
          getProducts()
          .then((respuesta)=> setData(respuesta))
          .catch((error)=> console.log(error))
      },[])

 return (
    <div>
      <h2 className="text-success d-flex justify-content-center my-4">{props.saludo}</h2>
      <ItemList data={data}/>
    </div>
  );
}
export default ItemListContainer