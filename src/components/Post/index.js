
const Post = ({ post }) => {
   return (
      <div key={post.id}>
         <h3>{post.title}</h3>
         <p>{post.content}</p>
      </div>
   );
};

export default Post;