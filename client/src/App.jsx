import "./index.css";
import {useEffect, useState} from 'react';

import NavBar from './components/Navbar';

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/users', {
      method: "GET",
    })
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);

  console.log(users);

  return (
    <div>
      <NavBar/>
      {users?.map(user => {
        return (
          <table key={user.id}>
            <th>{user.name}</th>
            <th>- {user.email}</th>
            <th>- {user.password}</th>
          </table>
        )
      })}
      
    </div>
  );
}

export default App;