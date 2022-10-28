import React from "react";
import "../../assets/css/about/about.css";
import "../../assets/css/about/about.scss";
export default function Project() {
  return (
    <div className="d-flex rootabout p-5 ">
      <div className="col-4">
        <img
          className="imageAbout "
          src={require("../../assets/images/about/about.png")}
          alt="about"
        />
      </div>
      <div className="col-6" style={{textAlign:"start"}}>
      <p className="tag">
         &lt;h1&gt; 
      </p>
       <h1> My, Myself & I</h1>
       <p className="tag">
        <br></br> &lt;h1/&gt; 
      </p>
      <p className="aboutparagraph" >
      <p className="tag">
         &lt;p&gt; 
      </p>
      I am a student of second year masters program in software Quality, I develop web and mobile applications. Naturally, I'm always keen on and interested on taking on new challenges, I learn fast and I believe that I can blend in any team and easily cooporate.
      <p className="tag">
         &lt;p/&gt; 
      </p>
      </p>
    
       </div>
    </div>
  );
}
