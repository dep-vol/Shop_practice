import React from "react";
import styles from "./Order/OrderForm.module.css";

export default function(props){

  switch (props.valid) {
    case 'invalid':{
      return(
        <div className={props.style.invalid}>
          {props.invalidMsg}
        </div>
      )
    }
    case 'valid':{
      return(
        <div className={props.style.valid}>
          {props.validMsg}
        </div>
      )
    }
    default: return <div></div>
  }


}