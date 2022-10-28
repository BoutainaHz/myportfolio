import React from "react";
import Navbar from "../global/navbar/Navbar";
import "../../assets/css/home/Home.css";
import SocialMedia from "../seedbar/SocialMedia";

export default function Home() {

  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* header */}
      <div className="pt-5 d-flex align-items-center justify-content-center backgroundimg ">
        <div className="container pt-5" >
        <div className="row w-100 ">
          <div className="col">
            <SocialMedia />

            <h1>Boutaina HZIMAR</h1>
            <h2>Fullstack developper</h2>
            <p className="titleparagraph" >I am a Web and Mobile developper </p>
        
            <button className="fullbtn" style={{marginTop:100}} >Dowload my Cv</button>
          </div>

          <div className="col">
            <img
              src={require("../../assets/images/home/image1.png")}
              alt="imageBoutaina"
            />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
