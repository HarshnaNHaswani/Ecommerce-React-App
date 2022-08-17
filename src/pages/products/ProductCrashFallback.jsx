import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCrashFallback = () => {
  return (
    <div className="center-xy" style={{height:"60vh"}}>
      <h2 className="heading heading-md">Something Crashed!</h2>
      <Link to="/product-listing" className='text text-md underline'>Return to all products</Link>
    </div>
  )
}
