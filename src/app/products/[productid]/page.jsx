import React from 'react'

export default async function page({params}) {
    //   const { id } = params;
      const productId = (await params).productid;
      console.log(params);
  return (
    <div>
      <h1>product details page for product ID: {productId}</h1>
    </div>
  )
}
