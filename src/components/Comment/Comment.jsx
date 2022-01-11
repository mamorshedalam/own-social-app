import React from 'react';

const Comment = ({comments}) => {
     const {name, email, body} = comments;
     return (
          <div className="commentContainer">
               <h2 className="commentName">{name}</h2>
               <h6 className="commentEmail">{email}</h6>
               <p className="commentBody">{body}</p>
          </div>
     );
};

export default Comment;