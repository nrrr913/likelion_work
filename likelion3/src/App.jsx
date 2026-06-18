import { useState, useEffect } from "react";
import axios from "axios";
import createPost from "./apiwork";
export default function UserList() {
  const [users, setUsers] = useState([]);

  const postContents = {
    name: "홍길동",
    age: 20,
    track: "FE",
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} onClick={createPost(postContents)}>
          <h2>이름 : {user.name}</h2>
          <p>이메일 : {user.email}</p>
          <p>웹사이트 : {user.website}</p>
        </li>
      ))}
    </ul>
  );
}
