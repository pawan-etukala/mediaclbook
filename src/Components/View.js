import React from "react";
import logo from "../Assets/homeo.jpg";
import "../css/View.css"
import { Link } from 'react-router-dom';

const view = () => {
  return (
    <div className="container">
      <div className="row main-div">
       <div className="col-4 d-flex align-items-center justify-content-center mt-5">
          <img
            src={logo}
            className="img-small border border-primary border-3 shadow-p3"
            alt="Description "
          />
        </div>
        <div className="col-8 mt-5">
          <div className="card mb-3 ">
            <div className="card-body bg-primary p-2 text-dark bg-opacity-25  border border-primary border-3 rounded ">
              <h5 className="card-title">The Essentials of Materia Medica</h5>
              <p className="card-text">
                 <big className="text-muted">by Shiva Kumar Reddy Methuku</big>
              </p>
              <p className="card-text">
                <big className="text-muted">
                  price{" "}
                  <span className="text-decoration-line-through">800</span>
                </big>
                <big> 539₹</big>
              </p>
              <p className="card-text">
                Quantity{" "}
                <i
                  className="fa-solid border-success fa-plus fa-1x p-1 border border border-3 rounded"
                  style={{ color: "#1fa305" }}
                ></i>{" "}
                1{" "}
                <i
                  className="fa-solid border-danger fa-minus fa-1x p-1 border border border-3 rounded"
                  style={{ color: "#e82c2c" }}
                ></i>
              </p>
              <Link to="/cart"> <button type="submit" className="btn btn-warning"> Go to cart</button></Link>
            
              <button type="button" className="btn btn-outline-primary">
                Go to cart
              </button>{" "}
              <button type="button" className="btn btn-outline-primary mx-5">
                Buy Now
              </button>
            </div>

            <div class="scroll-container">
              <div class="box">
                <h4>ISBN 13</h4>
                <h5>9789334035162</h5>
              </div>
              <div class="box">
                <h4>Pages</h4>
                <h5>1000</h5>
              </div>
              <div class="box">
                <h4>Weight</h4>
                <h5>800g</h5>
              </div>
              <div class="box">
                <h4> Dimensions</h4>
                <h5>7in × 10in</h5>
              </div>
              <div class="box">
                <h4>Publication Date</h4>
                <h5>December-2022</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
      <div className="col-12 mt-5">
     <h3>About Book</h3> 
*Study with FABULOUS ILLUSTRATIONS *ALL KEYNOTES COVERED AT ONE PLACE *EASY APPROACH TO UNDERSTANDING CONSTITUTION, MIASMS AND SPHERE OF ACTION BY OBSERVING PIE DIAGRAMS, TABLES, AND ILLUSTRATIONS. *STUDY PHYSIO-PATHOLOGICAL ACTION THROUGH FLOW CHARTS IN THE SIMPLEST WAY POSSIBLE. *INDEPTH COMPARATIVE STUDY OF ESSENTIAL DRUGS WITH MATCHING SYMPTOMATOLOGY AT THE SAME PLACE. *FOR THE FIRST TIME NOTEWORTHY RUBRICS OF THE REMEDY ARE MENTIONED SO THAT YOU CAN EMPHASIZE THE MOST RELEVANT SYMPTOMS OF THE REMEDY IN REPERTORIAL LANGUAGE. *VERY PRECIOUS CLINICAL AND DOSAGE TIPS THAT HAVE UNPARALLELED IMPORTANCE IN PRACTICE
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default view;
