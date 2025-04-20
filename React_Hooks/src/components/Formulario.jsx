import React from 'react'
import './styles/Formulario.css'

export default function Formulario() {
  return (
    <>
      <h1>Formulario de React</h1>
      <div className='style'>
        <form className=''>
            <label htmlFor='nombre'>Nombre: </label>
            <input type="text" id="nombre" name="nombre" required />
            <p>______________________</p>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <p>______________________</p>

            <label htmlFor='password'>Password: </label>
            <input type="password" id='password' name='password' required />
            

            <button type='submit'>Enviar Form</button>



        </form>
    </div>
    </>
  )
}
