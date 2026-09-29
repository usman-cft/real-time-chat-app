import React from "react";
import UserList from "./../components/Users/UserList";

const User = () => {
  const USERS = [
    {
      id: 1,
      name: "Usman Safdar",
      image: "https://i.pravatar.cc/150?img=3",
      places: 3,
    },
  ];
  return <UserList users={USERS} />;
};
export default User;
