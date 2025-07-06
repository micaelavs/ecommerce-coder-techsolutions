import { useEffect, useState } from "react"
import { getProducts, productos } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import ErrorPage from './ErrorPage';
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import InfoCards from "./InfoCards"; 
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = (props) => {
const[data, setData]= useState([])
const {categoryId} = useParams()
const [loading, setLoading]= useState(false)

    //firebase
    useEffect(()=>{
        setLoading(true)
        //conexion 
        const productsCollection = categoryId 
        ? query(collection(db,"productos"), where("categoria", "==", categoryId))
        : collection(db,"productos")
        
        //datos
        getDocs(productsCollection)
        .then((res)=>{
            const list = res.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
            })
           setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[categoryId])

      /*comentamos esto porque era para el mock*/
     /* useEffect(()=>{
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
    */
    //la usamos una sola vez para subir los prod
    /*const subirData = () => {
      console.log('click!')
      const collectionAgregar = collection(db, "productos")
      productos.map((prod) => addDoc(collectionAgregar, prod))
    }*/

  //Si la categoría no existe o está vacía
  if (!loading && categoryId && !data.length) {
    return <ErrorPage/>;
  }

 return (
  <>
    {/*<button onClick={subirData}>Subir productos</button> */}
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