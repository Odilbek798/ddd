import React from 'react'
import s from './Card.module.scss'

const Card = ({image, name="Soon....", rate="0", price="52"}) => {
  return (
    <>
    <div className={s.card}>
        <img src={image} alt="" />
        <h3></h3>
        <img src="" alt="" />
        <b>{price}</b>
    </div>
    </>
  )
}

export default Card