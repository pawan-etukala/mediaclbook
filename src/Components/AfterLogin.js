import React from 'react'
import { Link } from 'react-router-dom';

const Afterlogin = (props) => {
  return (
    <div className='mt-5 mb-5 d-flex justify-content-around flex-wrap gap-3'>
  
    <div className="card custom-card" style={{ width: '18rem' }}>
     <div className="card-body text-center">
       <span><img src={props.img} /></span>
       <h5 className="card-title">{props.title}</h5>
       <p className="card-text">{props.auther}</p>
       <p className="card-text">{props.price}</p>
       <a href="#" className="btn btn-primary">{props.view}</a>       
     </div>
   </div>
 </div>
  )
}

export default Afterlogin
