import React, { useContext } from 'react'
import AppContext from '../../context/AppContext';
import { Content } from '../utils/UseElements'

function Home () {

  const { addToCart } = useContext(AppContext);

  const handleClick = item => {
    addToCart(item)
    console.log('agregaste ' + item)
  }

  return (
    <Content className='margin140'>
      <div>Home</div>
      {data.map(producto => (
        <div key={producto.id}>
          <h1>{producto.name}</h1>
          <p>{producto.description}</p>
          <button onClick={() => handleClick(producto.name)}>agregar al carrito</button>
        </div>
      ))}
    </Content>
  )
}

const data = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
  },
  {
    id: 4,
    name: 'Producto 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
  }
]

export default Home
