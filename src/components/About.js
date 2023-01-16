import React from "react";
import Links from "./Links";


function About({props, github, linkedin ,bio}) {
  const [isPassed , setIsPassed] = React.useState(false)
  function setIsPassed()
  {
    setIsPassed(bio)
  
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{isPassed ? bio : ""}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} />
  
    </div>
  );
}
}

export default About;
