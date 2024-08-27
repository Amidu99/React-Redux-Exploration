import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

const Users = () => {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const handleCardClick = (userId, user, navigate) => {
    navigate('/posts', {
      state: {
        user: user,
      },
    });
    window.scrollTo(0, 0);
  };

  return (
    <div className="mybg min-vh-100">
      <div>
        <h1 className="font-weight-bolder p-4 heading">LIST OF BLOG WRITERS</h1>
      </div>
      <div className="d-flex flex-wrap justify-content-start p-4">
        {users.map((user) => (
          <Card
            handleEvent={() => handleCardClick(user.id, user, navigate)}
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            website={user.website}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
