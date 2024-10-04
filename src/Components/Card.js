import React from 'react'
import '../css/Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
    return (
      <div className="card" style={{ width: '18rem', background: 'linear-gradient(to top left, #ff7e5f, #feb47b)' }}>
        <div className="card-body text-center p-4"> {/* Increased padding for height */}
          <i className="fas fa-heart fa-3x mb-3 text-white"></i>
          <h5 className="card-title text-white">Card Title</h5>
          <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-light">Go somewhere</a>
        </div>
      </div>
    );
  };
  

export default Card;
