import React from 'react'
import { useEffect } from 'react';
import { collection, getDocs} from "firebase/firestore";
import db from './firebase/firebaseConfig'; 


function App() {
  useEffect(()=>{
    const obtenerDatos = async() => {
        const datos = await getDocs(collection(db, 'usuarios'));
        
        datos.forEach((documento) =>{
          console.log(documento.data());
        })
      }
      obtenerDatos();
  },[])

  return (
    <div>
      <h1>hola, esta es mi prueba de uso de firebase 9</h1>
    </div>
  )
}

export default App