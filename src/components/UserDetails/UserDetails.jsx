import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
     const { userId } = useParams();

     // load user
     const [user, setUser] = useState([]);
     useEffect(() => {
          const url = 'https://jsonplaceholder.typicode.com/users';
          fetch(url).then(res => res.json())
               .then(data => setUser(data.find(user => parseInt(user.id) === parseInt(userId))));
     }, [userId])
     const { name, email, phone, username, website, company, address } = user;
     return (
          <React.Fragment>
               {
                    address && (
                         <div className="userContainer">
                              <div className="container">
                                   <div className="userDiv rounded">
                                        <h2 className="userName">{name}</h2>
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
                    )
               }
          </React.Fragment>
     );
};

export default UserDetails;