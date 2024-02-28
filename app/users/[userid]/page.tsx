import React from "react";

const UserPage = async ({ params }: { params: { userid: number } }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userid}`
  );
  const user: { name: string } = await res.json();
  return <div>{user.name}</div>;
};

export default UserPage;
