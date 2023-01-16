import {React, useState} from "react";


function Home({user}) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick=(e)=>{
  console.log(e)
  setIsClicked(!isClicked)
  }
  return (
    <div id="home">
      <h1 style={{ color: user.color }}>
        {user.name} is a Web Developer from {user.city}
      </h1>
      <button onClick={(e)=>handleClick(e)}>Click Me</button>
    </div>
  );
}

export default Home;
