import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
   Container,
   BlogPost,
   Title,
   Author,
   Content
} from './style.css';

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
      <Container>
         <BlogPost>
            <Title>{post.title}</Title>
            <Author>Author: {post.author}</Author>
            <Content>{post.content}</Content>
         </BlogPost>
      </Container>
   );
};

export default Post;