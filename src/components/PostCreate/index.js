import React, { useState } from 'react';

const CreatePost = () => {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');

   const handleCreatePost = () => {
      // Make a POST request to create a new post
      fetch('http://localhost:3000/api/v1/posts', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ title, content }),
      })
         .then(response => response.json())
         .then(data => console.log('New post created:', data))
         .catch(error => console.error('Error creating post:', error));
   };

   return (
      <div>
         <h2>Create New Post</h2>
         <form>
            <label>Title:</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />

            <label>Content:</label>
            <textarea value={content} onChange={e => setContent(e.target.value)} />

            <button type="button" onClick={handleCreatePost}>Create Post</button>
         </form>
      </div>
   );
};

export default CreatePost;