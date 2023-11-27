import { useEffect, useState } from 'react';

const UserList = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      fetch('http://localhost:3000/api/v1/users')
         .then(response => response.json())
         .then(data => setUsers(data.data.users))
         .catch(error => console.error('Error fetching users:', error));
   }, []);

   return (
      <div>
         <h2>User List</h2>
         <ul>
            {users.map(user => (
               <li key={user.id}>{user.username}</li>
            ))}
         </ul>
      </div>
   );
};

export default UserList;