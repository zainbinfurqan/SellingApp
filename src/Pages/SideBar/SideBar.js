
import React, { useState,useEffect  } from 'react';
import "./sidebar.css";
import aboutus from "../../images/aboutus.jpg";
import contactus from "../../images/contactus.png";
import backIcon from '../../images/back_icon.png'
export default function SideBar(props) {
  let [open, setOpenFlag] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    setOpenFlag(open=props.open)
  })

function closeSidebar(){
  props.close();
}

  return (
    <div className={open == true ? "sidebar" : "sidebar-hide"}>
      <div className="sidebar_content">
        {/* <p style={{ color: "white" }} onClick={closeSidebar}> */}
        <img className="sidebar_back" onClick={closeSidebar} src={backIcon} />
          {/* Close */}
        {/* </p> */}
      </div>
      <div className="sidebar_content_logo">
        <h2>Sell It</h2>
        {/* <img className="logo" src={logo}/> */}
      </div>
      <div className="sidebar_content_">
        <div className="sideIcon">
          <img className="logo" src={contactus} />
        </div>
        <div className="sidetext">
          <p style={{ color: "white" }}>Contact Us</p>
        </div>
      </div>
      <div className="sidebar_content_">
        <div className="sideIcon">
          <img className="logo" src={aboutus} />
        </div>
        <div className="sidetext">
          <p style={{ color: "white" }}>About Us</p>
        </div>
      </div>
    </div>
  );
}
