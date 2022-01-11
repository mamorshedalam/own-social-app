import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
     const { name, email, phone, username, website, company, address } = user;
     const userId = user.id;
     return (
          <div className="col-12 col-md-6">
               <div className="userContainer">
                    <div className="container">
                         <div className="userDiv rounded">
                              <Link to={`${userId}`}><h2 className="userName">{name}</h2></Link>
                              <div className="userBox1 d-flex justify-content-between align-items-center">
                                   <p className="userUsername">{username}</p>
                                   <a href="#" className="userWebsite"><i>{website}</i></a>
                              </div>
                              <div className="userBox2 d-flex justify-content-between align-items-center">
                                   <p className="userEmail">{email}</p>
                                   <p className="userPhone">{phone}</p>
                              </div>
                              <p className="userCompany text-center">{company.name}</p>
                              <p className="userAddress">{address.street}, {address.zipcode}, {address.city}</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default User;