import { notFound } from 'next/navigation'
import React from 'react'

export default function page({params}) {

  if(params.shoesId === "omid"){
    notFound()
  }
  return (
    <h1>
      {`shoes id : ${params.shoesId}`}
    </h1>
  )
}

