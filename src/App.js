import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './features/Users';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  return (
    <div className="App">
      {" "}
      <div className="addUser">
        <input type="text" placeholder="Name..." />
        <input type="text" placeholder="Username..." />
        <button
          onClick={() => dispatch(addUser({
            id: 0,
            name: "",
            username: ""
          }))}
        >Add User</button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return <div key={user.username}>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
