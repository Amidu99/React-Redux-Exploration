import React from 'react';

const Card = (props) => {
  return (
    <div className="col-sm-3 mb-2 mb-sm-0">
        <div className="card m-2">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-title">Email: {props.email}</h6>
                <p className="card-text">Web: {props.website}</p>
                <a className="btn btn-primary" onClick={props.handleEvent} key={props.id}>View Posts</a>
            </div>
        </div>
    </div>
  );
}

export default Card;