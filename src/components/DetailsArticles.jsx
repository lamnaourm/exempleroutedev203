import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailsArticles() {

    const {code} = useParams()
  return (
    <div>
        <h1>details de l'article {code}....</h1>
    </div>
  )
}
