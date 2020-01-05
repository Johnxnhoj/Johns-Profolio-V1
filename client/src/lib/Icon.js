import React from "react"
import "font-awesome/css/font-awesome.min.css"

export default function(props) {
  return (
    <div>
      <i className={"fa fa-" + props.icon}></i>
    </div>
  )
}
