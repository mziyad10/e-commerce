import React from 'react'
import './Breadcrum.css'
import arrow_icon from "../Assets/breadcrum_arrow.png"

const Breadcrum = (props) => {

  return (
    <div className='breadcrums'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {props.category} <img src={arrow_icon} alt="" /> {props.name}
    </div>
  )
}

export default Breadcrum
