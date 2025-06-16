import React, { useEffect, useState } from 'react'

export default function FormPersons() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError]= useState(null)

    useEffect (()=>{
        fetch("https://api.escuela.js.co/api/v1/users")
        .then((response)=>{
            if(!response.ok){
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then((data) =>{
            setUsers(data)
            setLoading(false)
        })
    
        .catch((error) =>{
            setError(error.message)
            setLoading(false)
        })
    }, [])

    

if(loading) return <p>Cargando a los usuarios....</p>
if(error) return <p>Error al cargar usuarios: {error}</p>
if(users.length === 0)return <p>No se encuentran los usuarios en la database</p>



  return (
    <>
      <h1>LISTA DE USUARIOS</h1>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>PERFIL</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ACTIONS</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                    <img src={user.avatar} 
                    alt={`Img User ${user.name}`} 
                    style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover"
                    }}/>
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button>Update</button>
                        <button>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}
