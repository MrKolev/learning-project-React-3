import React, { useState } from 'react';
import { AddUser } from './components/Users/AddUser';
import { UserList } from './components/Users/UsersList';


function App() {
 const [data, setData] = useState([]);
  return (
    <div>
      <AddUser  />
      <UserList users={data} />
    </div>
  );
}

export default App;
