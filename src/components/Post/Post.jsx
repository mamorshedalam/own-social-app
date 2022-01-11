import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
     const { title, body, id, userId } = post;

     // load user
     const [user, setUser] = useState({});
     useEffect(() => {
          const url = 'https://jsonplaceholder.typicode.com/users';
          fetch(url).then(res => res.json())
               .then(data => setUser(data.find(user => parseInt(user.id) === parseInt(userId))));
     }, [userId])
     return (
          <div className="col-12 col-md-6">
               <div className="postContainer rounded position-relative">
                    <h4 className="postTitle text-capitalize">{title}</h4>
                    <Link to={`user/${userId}`}><a href="" className="postName">{user.name}</a></Link>
                    <p className="postPara">{body}</p>
                    <Link to={`/post/${id}`}><button className="rounded postBtn">Read More...</button></Link>
               </div>
          </div>
     );
};

export default Post;