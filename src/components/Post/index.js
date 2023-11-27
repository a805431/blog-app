import React, { useEffect, useState } from 'react';

const Post = ({ postId }) => {
   const [post, setPost] = useState(null);

   useEffect(() => {
      fetch(`http://localhost:3000/api/v1/posts/${postId}`)
         .then(response => response.json())
         .then(data => setPost(data.data.post))
         .catch(error => console.error('Error fetching post details:', error));
   }, [postId]);

   if (!post) {
      return <p>Loading...</p>;
   }

   return (
      <div>
         <h2>{post.title}</h2>
         <p>{post.content}</p>
      </div>
   );
};

export default Post;