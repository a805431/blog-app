import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
   Container,
   PostContainer,
   Title,
   Author,
   ReadButton,
   PostWrapper
} from './style.css';

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
      <Container>
         <h2>Posts</h2>
         <p>
            <ReadButton>
               <Link to="/create-post">Create Post</Link>
            </ReadButton>
         </p>
         <PostWrapper>
            {posts.map((post) => (
               <PostContainer key={post.id}>
                  <Title>{post.title}</Title>
                  <Author>By {post.author}</Author>
                  <ReadButton onClick={() => handleReadPost(post.id)}>Read Post</ReadButton>
               </PostContainer>
            ))}
         </PostWrapper>
      </Container>
   );
};

export default PostList;