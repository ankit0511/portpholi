// eslint-disable-next-line no-unused-vars
import React from 'react';
import Frontend from './Frontend';
import Coursework from './Coursework';
import './skills.css'
import New from './New.jsx';


const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills 🛠️</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Coursework />
        <New/>
      </div>
    </section>
  )
}

export default Skills