import { useEffect, useState } from 'react';
import { Container, UserContainer, UserName } from './style.css';

const UserList = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      fetch('http://localhost:3000/api/v1/users')
         .then(response => response.json())
         .then(data => setUsers(data.data.users))
         .catch(error => console.error('Error fetching users:', error));
   }, []);

   return (
      <Container>
         <h2 style={{ marginLeft: '20px' }}>User List</h2>
         <UserContainer >
            {users.map(user => (
               <UserName key={user._id}>{user.username}</UserName>
            ))}
         </UserContainer >
      </Container>
   );
};

export default UserList;