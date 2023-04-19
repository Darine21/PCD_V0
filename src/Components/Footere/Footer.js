import React from "react";
import "./Footer.css";
import { HashLink } from "react-router-hash-link";
import {BsFillTelephoneFill} from "react-icons/bs"
import {BsFillEnvelopeAtFill} from "react-icons/bs";
import {BsGlobe} from "react-icons/bs"
import {BsGeo} from "react-icons/bs"
export default function Footer({ space }) {
  return (
    <>
      <footer className="footer-section">
        <div
          className={`footer-top background-img-1 ${
            space ? "pt-150" : "pt-60"
          }`}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
                <div className="footer-nav-wrap text-white" >
                  <h1 className="col"> Cancer check up </h1>
                  <p className="footer">
                   Pour obtenir nos dernières recommandations, abonnez-vous 
                  </p>
                  
                  <form >
                      <input
                       className='footer-input'
                       type='email'
                       placeholder='YOUR Email'
                      />
                      <button 
                      className="footer-btn"
                      > save</button>
                    </form>

                  <div className="social-list-wrap">
                    <ul className="social-list list-inline list-unstyled">
                      <li className="list-inline-item">
                        <a
                          href="https://www.linkedin.com/company/justk8s/"
                          target="_blank"
                          title="JustK8s"
                        >
                          <span className="ti-linkedin footer-text"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://github.com/justk8s"
                          target="_blank"
                          title="Twitter"
                        >
                          <span className="ti-github footer-text"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-sm-6 col-md-4 col-lg-4 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                    <div className="footer-nav-wrap text-white">
                      <h5 className="mb-3 text-white" style={{color:"hsla(30, 59%, 45%, 0.902)"}}>Sections</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <a className="footer-text" href="#/" id="home">
                            Home
                          </a>
                        </li>
                        <li className="mb-2">
                          <a className="footer-text" href="#/">
                            Info
                          </a>
                        </li>
                        <li className="mb-2">
                          <a className="footer-text" href="#/">
                            Consulter un medcien 
                          </a>
                        </li>
                        <li className="mb-2">
                          <a className="footer-text" href="#/">
                            Open Sources
                          </a>
                        </li>
                        <li className="mb-2">
                          <a className="footer-text" href="#/">
                            Documentation
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="col-sm-6 col-md-4 col-lg-4">
                    <div className="footer-nav-wrap ">
                      <h5 className="mb-3 ">Contact</h5>
                      <ul className="list-unstyled support-list">
                        <li className="mb-2 d-flex align-items-center">
                          <span className="footer-text">
                            <span className="ti-location-pin "></span>
                           <BsGeo/> Street of Tunis 
                            <br />
                            Sfax, Tunisia 3041
                          </span>
                        </li>
                        <li className="mb-2 d-flex align-items-center">
                          <span className="ti-mobile mr-2"></span>
                          <a className="footer-text" href="tel:+21670038285">
                           <BsFillTelephoneFill/> +216 70 038 285
                          </a>
                        </li>
                        <li className="mb-2 d-flex align-items-center">
                          <span className="ti-email mr-2"></span>
                          <a
                            className="footer-text"
                            href="mailto:info@justk8s.com"
                          >
                           <BsFillEnvelopeAtFill/> info@skincancer.com
                          </a>
                        </li>
                        <li className="mb-2 d-flex align-items-center">
                          <span className="ti-world mr-2"></span>
                          <a
                            className="footer-text"
                            href="http://www.justk8s.com/"
                          >
                           <BsGlobe/> www.skincancer.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom border-gray-light mt-5 py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-7">
                  <div className="copyright-wrap small-text">
                    <p className="mb-0 text-white">
                      © 2023 Cancer Skin, All Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="terms-policy-wrap text-lg-right text-md-right text-left"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}