import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './features/Users';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  return (
    <div className="App">
      {" "}
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          onClick={() => dispatch(addUser({
            id: userList[userList.length - 1].id + 1,
            name,
            username
          }))}
        >Add User</button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return <div key={user.username}>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <input
              type="text"
              placeholder="New Username..."
              onChange={(event) => {
                //setUsername(event.target.value);
              }}
            />
            <button>Update Username</button>
            <button>Delete Username</button>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
