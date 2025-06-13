import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({prod}) => {
    const {nombre, precio, img, id}= prod
  return (
 <div className="card" style={{width:'18rem'}}>
    <img src={img} style={{ height: '400px', objectFit: 'cover' }} className="card-img-top" alt={nombre}/>
    <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">${precio},00</p>
        <Link to={`/item/${id}`} className="btn btn-primary">Ver más</Link>
    </div>
</div>
  )
}

export default Item