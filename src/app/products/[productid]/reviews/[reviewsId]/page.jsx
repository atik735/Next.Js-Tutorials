import React from 'react'

export default async function page({params}) {
    const reviewsId = (await params).reviewsId;
    console.log(params);
  return (
    <div>
      <h1>reviews id: {reviewsId}</h1>
    </div>
  )
}
