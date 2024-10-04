import React from "react";
import Carousel from "./Carousel";
import Cards from "./Card";
import Imgvideo from "./Imgvideo";
import Contact from "./Contact";
import AfterLogin from "./AfterLogin";
import img from '../Assets/homeo.jpg';


const Landing = () => {
  return (
    <div>
      <Carousel />
      <div className="d-flex justify-content-around flex-wrap mt-5 mb-5 gap-3">
        <Cards
          icon={<i className="fa-solid fa-unlock fa-5x text-white p-3"></i>}
          name="FULL ACCESS"
          cardtext="Some quick example text to build on the card title and make up the bulk of the card's content."
          readmore="Read more"
        />
        <Cards
          icon={<i className="fa-solid fa-money-bill fa-5x text-white p-3"></i>}
          name="MONTHLY SUBSCRIPTION"
          cardtext="Some quick example text to build on the card title and make up the bulk of the card's content."
          readmore="Read more"
        />
        <Cards
          icon={<i className="fa-solid fa-file fa-5x text-white p-3"></i>}
          name="BUY A CHAPTER"
          cardtext="Some quick example text to build on the card title and make up the bulk of the card's content."
          readmore="Read more"
        />
      </div>
      {/* <AfterLogin
        img={img}
        title={"The essentials of materia medica"}
        auther={"Shiva Kumar Reddy Methuku"}
        price={"$29.99"}
      /> */}
      <Imgvideo />
      <Contact />
    </div>
  );
};

export default Landing;
