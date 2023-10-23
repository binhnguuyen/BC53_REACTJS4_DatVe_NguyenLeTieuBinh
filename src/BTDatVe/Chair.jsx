import React from "react";
// css thì import ngay đây cũng đc
import './style.css'

export const Chair = (props) => {
  const { ghe } = props;
  return (
    <div>
        {ghe.soGhe}
    </div>
  )
    
};
