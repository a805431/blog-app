import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import Post from './components/Post';

const App = () => {
  return (
    <Router>
      <div>
<nav>
          <ul>
            <li>
              <Link to="/users">Go to User List</Link>
            </li>
            <li>
              <Link to="/posts">Go to Post List</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/create-post" element={<PostCreate />} />
          <Route path="/posts/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
