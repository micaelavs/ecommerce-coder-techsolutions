import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
  return (
    <div style={{display: 'flex',justifyContent: 'center',alignItems: 'flex-start',flexWrap: 'wrap', gap: '1rem'}}>
        {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList