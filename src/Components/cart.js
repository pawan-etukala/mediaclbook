import React from 'react';

const Cart = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-75 h-50 bg-primary p-2 text-dark bg-opacity-25">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.img} className="img-fluid rounded-start" alt={props.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{props.title}</h1>
              <h3 className="card-text">{props.title2}</h3>
              <p className="card-text">Author: {props.author}</p>
              <p className="card-text">Price: {props.price}</p>
              <p className="card-text">ISBN: {props.isbn}</p>
              <p className="card-text">Quantity: {props.quantity}</p>
              <button className="btn btn-danger" onClick={props.remove}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
