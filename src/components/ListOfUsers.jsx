import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/store";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import { removeUser } from "../store/thunks/removeUser";
import AddBtn from "./AddBtn";
import { addUser } from "../store/thunks/addUser";

export default function ListOfUsers() {
  const [isLoadingUsers, setLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState(null);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.users);

  const handleAddUser = () => {
    setIsCreatingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch((err) => setCreatingUserError(err))
      .finally(() => setIsCreatingUser(false));
  };

  useEffect(() => {
    setLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      .catch((err) => setLoadingUsersError(err))
      .finally(() => setLoadingUsers(false));
  }, [dispatch]);

  if (isLoadingUsers)
    return <Skeleton className="h-10 my-2" count={data.length} />;

  if (loadingUsersError) return <div> Error fetching data...</div>;

  const renderedList = data.map((user) => {
    return (
      <li key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          <div className="flex items-center gap-2">
            <RiDeleteBin6Line onClick={() => removeUser(user.id)} />
            {user.name}
          </div>
          <IoIosArrowDown />
        </div>
      </li>
    );
  });

  return (
    <div className="flex-col flex gap-5">
      <div className="flex items-center justify-between">
        <h2 className="font-bold">List of Users</h2>
        {isCreatingUser ? (
          "Creating User..."
        ) : (
          <AddBtn onclick={handleAddUser}>+ Add User</AddBtn>
        )}

        {creatingUserError && "Error creating User..."}
      </div>

      <ul className="space-y-3">{renderedList}</ul>
    </div>
  );
}
