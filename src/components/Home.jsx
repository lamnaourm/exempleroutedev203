import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate()

  return (
    <div>
        <h1>Page d'acceuil</h1>

        <button onClick={() => navigate('/categorie')}>List Categories</button>
    </div>
  )
}
