import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Carrusel from './Carousel/Carrusel.jsx'
import ComentarFeedback from './Comentarios/Comentarios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Carrusel />
    <ComentarFeedback />
  </StrictMode>,
)
