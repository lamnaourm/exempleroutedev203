import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Articles() {
  return (
    <div>
        <Outlet />

        <h1>Liste des articles</h1>

    </div>
  )
}
