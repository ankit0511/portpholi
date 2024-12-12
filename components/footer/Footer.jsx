/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">&lt;Ankit Patle/&gt;</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonia" className="footer__link">Coding Profile </a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/ankit__0511/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://x.com/a__nkit" className="footer__social-link" target="_blank">
                    <i className="bx bxl-twitter"></i>
                </a>

                <a href="https://github.com/ankit0511" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>
            </div>

          
        </div>
    </footer>
  )
}

export default Footer