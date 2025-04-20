import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormPersons from './components/FormPersons.jsx'
import Formulario from './components/Formulario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormPersons />
    <Formulario />
  </StrictMode>,
)
