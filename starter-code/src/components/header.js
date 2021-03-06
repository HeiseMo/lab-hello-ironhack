import React from "react";

const header = (props) => {
  return (
    <div className="main">
      <div className = "navigation">
        <div><img src="/images/ironhack-logo.svg" alt="logo" /></div>
        <div><img src="/images/menu-top.svg" alt="logo" /></div>
       </div> 
       <div className="overlayTop">
        <div><h1>Say Hello to ReactJS</h1></div>
        <div><p className="text">You will learn a Frontend farmework from scratch to become a Ninka Developer</p></div>
        <div><button>Awesome!</button></div>
       </div>
    </div>
  );
};
export default header;