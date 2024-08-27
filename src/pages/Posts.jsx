import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../components/PostCard';

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  const handleCardClick = (postId) => {
    console.log(`Post ID: ${postId} clicked`);
  };

  return (
    <div className="mybg min-vh-100">
      <div>
        <h1 className="font-weight-bolder p-4 heading">LIST OF BLOG POSTS</h1>
      </div>
      <div className="d-flex flex-wrap justify-content-start p-4">
        {posts.map((post) => (
          <PostCard
            handleEvent={() => handleCardClick(post.id)}
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
