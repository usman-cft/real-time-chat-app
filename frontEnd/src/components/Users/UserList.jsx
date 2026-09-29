import UserItem from "./UserItem";

const UserList = (props) => {
  if (!props.users) {
    return <h1>No Users Found</h1>;
  }

  return (
    <ul>
      {props.users.map((user) => (
        <UserItem
          key={user.id}
          name={user.name}
          id={user.id}
          image={user.image}
          placeCount={user.places.length}
        />
      ))}
    </ul>
  );
};
export default UserList;
