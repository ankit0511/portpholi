/* eslint-disable no-unused-vars */
import React from 'react';
import './qualification.css';

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification 🧑🏻‍🎓</h2>
        <span className="section__subtitle">My Personel Journey 🚗</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Masters Of Computer Applications 🎓</h3>
                            <span className="qualification__subtitle">Jabalpur Engineering Collage - Jabalpur</span>
                            <div className="qualification__calender">
                            <i className="uil uil-award"></i> 8.08 CGPA

                            </div>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__round"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__round"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Bachelor of Computer Applications</h3>
                            <span className="qualification__subtitle">Dr. Hari Singh Gaur University Sagar</span>
                            <div className="qualification__calender">
                            <i className="uil uil-award"></i> 8.17 CGPA
                            </div>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2022
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification