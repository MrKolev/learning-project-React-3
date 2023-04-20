import { useState } from 'react';
import { AddUser } from './components/Users/AddUser';
import { UserList } from './components/Users/UsersList';


function App() {

  const [myData, setMyData] = useState([]);
  
  const updateDta = (name, age) => {
    setMyData((prevdata) => {
      return [...prevdata, { name, age, id: Math.random().toString() }];
    })
  }
  return (
    <div>
      <AddUser updateDta={updateDta} />
      <UserList users={myData} />
    </div>
  );
}

export default App;
