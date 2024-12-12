/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt='' className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <h2 className="work__title2"> Tech Stack : - {item.tech}</h2>
        <a href={item.link} target="_blank" className="work__button"> Have A look <i className="bx bx-right-arrow-alt work__button-icon"></i></a>
    </div>
  )
}

export default WorksItems