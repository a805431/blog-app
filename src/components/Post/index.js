import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
   const { id } = useParams();
   const [post, setPost] = useState({});

   useEffect(() => {

      fetch(`http://localhost:3000/api/v1/posts/${id}`)
         .then(response => response.json())
         .then(data => setPost(data.data.post))
         .catch(error => console.error('Error fetching post details:', error));
   }, [id]);

   return (
      <div>
         <h2>{post.title}</h2>
         <p>Author: {post.author}</p>
         <p>{post.content}</p>
      </div>
   );
};

export default Post;