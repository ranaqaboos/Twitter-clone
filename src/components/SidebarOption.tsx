import React from "react";
import '../style/SidebarOption.css'

function SidebarOption({ active, text, Icon }:any) {
    return (
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icon />
        <h2>{text}</h2>
      </div>
    );
  }
  
  export default SidebarOption;