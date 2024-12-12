/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const[toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="section experience section" id="experience">
        <h2 className="section__title">Experience 💼</h2>
        <span className="section__subtitle">What I work as</span>

        <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <i className="uil uil-web-grid exp__icon"></i>
                    <h3 className="exp__title">Full Stack  <br /> Developer <br /> Intern </h3>
                </div>

                <div>
                    <span className="exp__comp">Dream Dev Infotech</span>
                </div>
                <span className="exp__button" onClick={() => toggleTab(1)}>Read What I Did There <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Full Stack Developer Intern <br /> March'24 - September'24🧑🏻‍💻</h3>
                        <p className="exp__modal-description">Worked at Dream Dev Infoteach as Intern for 5 months.
                            Providing quality work to clients and company.
                        </p>
                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Designed and applied RESTful APIs in Node.js achieving 95% code coverage and efficient communication and
                                data exchange between clients and servers.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Implemented OPC communication interface using Node.js with the node-opcua library to facilitate real-time
data exchange between industrial systems.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Built 10+ UI/UX components using React.js and JavaScript, enhancing the user interface and experience for
                                web applications.</p>
                            </li>
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Implemented a user authentication system using OAuth 2.0, Bcrypt, and MongoDB for security access and
                                management.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp__content">
                <div>
                    <i className="uil uil-arrow exp__icon"></i>
                    <h3 className="exp__title">Software <br /> Developer <br/> Intern</h3>
                </div>

                <div>
                    <span className="exp__comp">Small Fare Pvt. Ltd.</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(2)}>Read What I did There <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Software Developer Intern <br /> November'24 - January'24</h3>
                        <p className="exp__modal-description">Worked as Intern for 3 months.
                            Providing quality work to clients and company.
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Developed a robust, scalable QR code generation feature using Node.js, qrcode, crypto, and JWT, with
                                real-time analytics and expiry management.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Worked on handling and processing JSON data over HTTP to improve the efficiency of data manipulation and
                                retrieval in mobile applications.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Worked on implementing and executing testing methodologies also followed the TDD approach, ensuring code
                                quality and reducing bugs</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience