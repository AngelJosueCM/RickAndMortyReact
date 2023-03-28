import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { unicoPersonaje } from '../functions/funciones'



const Personaje = () => {

  const [personaje, setPersonaje] = useState(null)

  const params = useParams()
  useEffect(() => {
    unicoPersonaje(params.id, setPersonaje)
  },[])
  return (
    <div className='row'>
      {personaje != null ? (
      <div className='card' style={{minWidth: "50px"}}>
      <h2>Nombre: {personaje.name}</h2>
      <img src={personaje.image} width="200px"/>
      <p>Especie: {personaje.species}</p>
      <p>Localizacion: {personaje.location.name}</p>
      
      </div>
       ) : ('no hay personaje')}
    </div>
  )
}

export default Personaje

