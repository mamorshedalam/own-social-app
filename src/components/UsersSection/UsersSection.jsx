import React, { useEffect, useState } from 'react';
import User from '../User/User';


const UsersSection = () => {

     // load user
     const [user, setUser] = useState([]);
     useEffect(() => {
          const url = 'https://jsonplaceholder.typicode.com/users';
          fetch(url).then(res => res.json())
               .then(data => setUser(data));
     }, [])
     return (
          <section>
               <div className="container">
                    <div className="row">
                         {
                              user.length > 0 && user.map(data => <User key={data.id} user={data} />)
                         }
                    </div>
               </div>
          </section>
     );
};

export default UsersSection;