import React from "react";
import "../../assets/css/skils/Skils.css";
export default function Skills() {
  return (
    <div className="d-flex root">
      
      <div className="col-7 p-5">
        <p className="tag">&lt;h1&gt;</p>
        <h1> Skills & Experiences </h1>
        <p className="tag">
          <br></br> &lt;h1/&gt;
        </p>

        <p className="aboutparagraph" >
      <p className="tag">
         &lt;p&gt; 
      </p>
      Since beginning my journey as a developer with ACE Cloud, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web mobile applications for both business and consumer use.<br/>
      I create successful responsive websites that are fast, easy to use, and built with best practices.<br/>
      I also have full-stack developer experience, in my studies, I make my hands dearty with the differents projects.<br/>
      Visit my LinkedIn profile for more details or just contact me.
      <p className="tag">
      <br/>
         &lt;p/&gt; 
      </p>
      </p>
      </div>
      <div className="col" style={{textAlign:"end"}}>
        <img
          className="imageSkills"
          src={require("../../assets/images/skills/skills.png")}
          alt="about"
        />
      </div>
    </div>
  );
}
