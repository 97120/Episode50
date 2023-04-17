import React from 'react';
import './App.css';
import Text from './components/thanzaw';
import { useState } from 'react';
import User from './components/User';


const allUsers: User[] = [
  { name: "aung myanmar", email: "user1@gmail.com", age: 30 },
  { name: "msquare", email: "user1@gmail.com", age: 25 },
  { name: "okar", email: "user1@gmail.com", age: 10 },
  { name: "than zaw oo", email: "user1@gmail.com", age: 20 }
];

function App() {
  const [users, setUsers] = useState<User[]>(allUsers);
  const [inputName, setInputName] = useState<string>()

  const handleOnClick = () => {
     if (inputName) {
       const newUsers = [...users, { name: inputName }];
       console.log(newUsers)
       setUsers(newUsers)
       setInputName("")

    }; 
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <input
          type='text'
          style={{ marginBottom: "14px" }}
          onChange={(event) => {
            setInputName(event.target.value)
          }}
        />
        <button
          style={{ marginBottom: "14px" }}
          onClick={handleOnClick}
          
        >
          Add Users
        </button>
        <div>
          

            {users.map((user) => {
                return (
                    <div>{user.name}</div>
                )
            })}
        </div>
      </header>
    </div>
  );
}

export default App;

