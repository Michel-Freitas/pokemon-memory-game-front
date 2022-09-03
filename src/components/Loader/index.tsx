import React from "react";
import "./style.scss";

type Load = {
  isOpen: boolean
}

const Loader: React.FC<Load> = (props) => {
  return (
    <div className={`modalLoader ${props.isOpen && "showModal"}`}>
      <div className="loader"></div>
    </div>
  )
}

export default Loader;