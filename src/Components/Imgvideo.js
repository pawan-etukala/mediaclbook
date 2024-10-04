import React from 'react'
import  VIDEO from'../Assets/homeo.jpg';
import  logo from'../Assets/homeo.jpg';
const Imgvideo = () => {
  return (
    <div>
      {/*  video & img START... */}
<div className="d-flex justify-content-center align-items-center vh-70 bg-secondary p-5" >
      <div className="row ">
        <div className="col-6 ">
          <video className="custom-size shadow-sm" controls autoPlay>
            <source src={VIDEO} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-6">
  <img src={logo} className="custom-size shadow-sm" alt="Description" />
</div>

      </div>
    </div>
{/*  video & img ends... */}
    </div>
  )
}

export default Imgvideo
