/* eslint-disable @typescript-eslint/no-explicit-any */
import { use } from "react";
import { API_ENDPOINT } from "../../api";

const fetchData = async () => {
  const res = await fetch(`${API_ENDPOINT}/users`);
  return await res.json();
};

export function UseDemo() {
  const users = use(fetchData());
  console.log(users, "commentsPromise");

  return (
    <ul>
      {users?.map((user: any) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </ul>
  );
}
