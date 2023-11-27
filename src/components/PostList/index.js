import { useEffect, useState } from 'react';
import Post from './../Post';
import { Link } from 'react-router-dom';

const PostList = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      fetch('http://localhost:3000/api/v1/posts')
         .then(response => response.json())
         .then(data => setPosts(data.data.posts))
         .catch(error => console.error('Error fetching posts:', error));
   }, []);

   return (
      <div>
         <h2>Post List</h2>
         <button>
            <Link to="/create-post">Create Post</Link>
         </button>
         {posts.map(post => (
            <Post key={post.id} post={post} />
         ))}
      </div>
   );
};

export default PostList;