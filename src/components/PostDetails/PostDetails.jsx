import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetails = () => {
     const { id } = useParams();

     // load single post
     const [post, setPost] = useState({});
     useEffect(() => {
          const url = 'https://jsonplaceholder.typicode.com/posts';
          fetch(url).then(res => res.json())
               .then(data => setPost(data.find(post => parseInt(post.id) === parseInt(id))))
     }, [id])
     const { title, body } = post;

     // load comments
     const [comment, setComment] = useState([]);
     useEffect(() => {
          const url = 'https://jsonplaceholder.typicode.com/comments';
          fetch(url).then(res => res.json())
               .then(data => setComment(data.filter(comment => parseInt(comment.postId) === parseInt(id))))
     }, [id])

     return (
          <div className="detailContainer">
               <div className="container">
                    <div className="detailDiv rounded">
                         <h4 className="detailTitle text-capitalize">{title}</h4>
                         <p className="detailPara">{body}</p>
                    </div>
                    <div className="commentDiv">
                         <div className="row">
                              <div className="col-2">
                                   <h1 className="commentHeader">Comments:</h1>
                              </div>
                              <div className="col-10">
                                   {
                                        comment.length > 0 && comment.map(data => <Comment key={data.id} comments={data} />)
                                   }</div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default PostDetails;