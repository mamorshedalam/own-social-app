import React from 'react';
import logo from './../../img/facebook-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserFriends, faComments, faPlay, faBell, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <section id="header">
               <div className="topHeader text-center">
                    <div className="container">
                         <Link to={`/`}><a href="#" className="navLogo w-25 d-inline-block"><img src={logo} alt="" className="img-fluid" /></a></Link>
                    </div>
               </div>
               <div className="navMenu">
                    <div className="container">
                         <div className="row">
                              <div className="col-2">
                                   <Link to={`/`}><a href="#" className="menuItem d-inline-block rounded"><FontAwesomeIcon icon={faHome} /></a></Link>
                              </div>
                              <div className="col-2">
                                   <Link to={`/user`}><a href="#" className="menuItem d-inline-block rounded"><FontAwesomeIcon icon={faUserFriends} /></a></Link>
                              </div>
                              <div className="col-2">
                                   <Link to={`/messages`}><a href="#" className="menuItem d-inline-block rounded"><FontAwesomeIcon icon={faComments} /></a></Link>
                              </div>
                              <div className="col-2">
                                   <Link to={'/videos'}><a href="#" className="menuItem d-inline-block rounded"><FontAwesomeIcon icon={faPlay} /></a></Link>
                              </div>
                              <div className="col-2">
                                   <Link to={`/notifications`}><a href="#" className="menuItem d-inline-block rounded"><FontAwesomeIcon icon={faBell} /></a></Link>
                              </div>
                              <div className="col-2">
                                   <Link to={`/menu`}><a href="#" className="menuItem d-inline-block rounded"><FontAwesomeIcon icon={faBars} /></a></Link>
                              </div>
                         </div>
                    </div>
               </div>
          </section >
     );
};

export default Header;