import { useState } from 'react';

const PostCreate = () => {
   const [title, setTitle] = useState('');
   const [author, setAuthor] = useState('');
   const [content, setContent] = useState('');

   const handleCreatePost = () => {
      // Generate a random ID for the post
      const postId = Math.floor(Math.random() * 1000) + 1;

      fetch('http://localhost:3000/api/v1/posts', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ id: postId, title, author, content }),
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

            <label>Author:</label>
            <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />

            <label>Content:</label>
            <textarea value={content} onChange={e => setContent(e.target.value)} />

            <button type="button" onClick={handleCreatePost}>
               Create Post
            </button>
         </form>
      </div>
   );
};

export default PostCreate;