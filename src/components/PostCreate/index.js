import { useState } from 'react';
import { Wrapper, Label, Input, TextArea, Button } from './style.css';

const PostCreate = () => {
   const [formData, setFormData] = useState({
      title: '',
      author: '',
      content: '',
   });

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const postId = Math.floor(Math.random() * 1000) + 1;

      fetch('http://localhost:3000/api/v1/posts', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ id: postId, ...formData }),
      })
         .then((response) => response.json())
         .then((data) => console.log('New post created:', data))
         .catch((error) => console.error('Error creating post:', error));
   };

   return (
      <Wrapper>
         <h2>Create New Post</h2>
         <form onSubmit={handleSubmit}>
            <div>
               <Label htmlFor="title">Title:</Label>
               <Input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
               />
            </div>
            <div>
               <Label htmlFor="author">Author:</Label>
               <Input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
               />
            </div>
            <div>
               <Label htmlFor="content">Content:</Label>
               <TextArea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
               />
            </div>
            <div>
               <Button type="submit">Create Post</Button>
            </div>
         </form>
      </Wrapper>
   );
};

export default PostCreate;