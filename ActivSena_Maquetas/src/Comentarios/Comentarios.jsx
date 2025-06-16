import React, { useState } from 'react';
import './styles/ComentarStyle.css'
import imagen1 from '../assets/images/imagen1.jpg';


export default function ComentarFeedback() {
  const [usuarios, setUsuarios] = useState([
    { name: "Pepe Philipinas Gorra", imagen: imagen1, comentarios: "Excelente", reseñas:"★★★★★" },
    { name: "Juan Pérez", imagen: imagen1, comentarios: "Casi no me gusto, Falto emocion", reseñas:"★☆☆☆☆" },
    { name: "Ana López",  imagen: imagen1, comentarios: "Me gustó", reseñas:"★★★☆☆" }
    
  ]);

  const [nuevoComentario, setNuevoComentario] = useState("");

  const agregarComentario = () => {
    if (nuevoComentario.trim() !== "") {
      setUsuarios(prevUsuarios => [
        ...prevUsuarios,
        { name: "Name user", imagen1,  comentarios: nuevoComentario, reseñas:"☆☆☆☆☆" }
      ]);
      setNuevoComentario("");
    }
  };

  return (
    <>
      <section className="table">
        <div className='table-container'>
          <table className='border '>
            <thead>
              <tr>
                <th>Usuarios</th>
                <th>Comentarios</th>
                <th>Reseñas</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td className='border user-cell'>
                  {usuario.imagen ? (
                      <img src={usuario.imagen} alt={usuario.name} className="perfil-img" />
                    ) : (
                      <img src="default-image.jpg" alt="perfil de imagen" className="perfil-img" />
                    )}
                  <span>{usuario.name}</span>
                  </td>
                  <td className="border">{usuario.comentarios}</td>
                  <td className='border'>{usuario.reseñas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <div className="flex">
        <input 
          type="text" 
          placeholder="Escribe tu Comentario..." 
          className="input-text"
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
        />
        <button className="button-submit" onClick={agregarComentario}>
          Subir
        </button>
      </div>
    </>
  );
}