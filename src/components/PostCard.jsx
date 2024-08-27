import React from 'react';

const PostCard = (props) => {
  return (
    <div className="col-sm-4 mb-2 mb-sm-0">
      <div className="card m-2">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.body}</p>
          <a className="btn btn-primary" onClick={props.handleEvent} key={props.id}>Read More</a>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
