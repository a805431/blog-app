import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PostList = () => {
   const [posts, setPosts] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      fetch('http://localhost:3000/api/v1/posts')
         .then(response => response.json())
         .then(data => setPosts(data.data.posts))
         .catch(error => console.error('Error fetching posts:', error));
   }, []);

   const handleReadPost = postId => {
      navigate(`/posts/${postId}`);
   };

   return (
      <div>
         <h2>Post List</h2>
<button>
            <Link to="/create-post">Create Post</Link>
         </button>
         {posts.map(post => (
            <div key={post.id}>
               <h3>{post.title}</h3>
               <p>Author: {post.author}</p>
               <button onClick={() => handleReadPost(post.id)}>Read Post</button>
            </div>
         ))}
      </div>
   );
};

export default PostList;