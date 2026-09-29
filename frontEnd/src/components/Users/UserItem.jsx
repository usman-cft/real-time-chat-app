const UserItem = (props) => {
  return (
    <li>
      <div className="user-item-container justify-center items-center flex flex-row gap-4 bg-gray-300 p-4 rounded-lg shadow-md w-[300px] mx-auto my-4">
        <div>
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className="user-item-info flex flex-col gap-2">
          <h2 className="text-2xl font-bold">{props.name}</h2>
          <p>
            {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
          </p>
        </div>
      </div>
    </li>
  );
};
export default UserItem;
