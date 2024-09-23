import React from 'react'

const ProductCard = () => {
  return (
    <div>
      <div className="card custom-card" style={{ width: '18rem' }}>
    <div className="card-body text-center">
      <span><i className="fa-solid fa-unlock fa-5x text-white p-3"></i></span>
      <h5 className="card-title">FULL ACCESS</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Read more</a>
    </div>
  </div>
    </div>
  )
}

export default ProductCard
