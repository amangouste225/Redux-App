import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../store/store";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import { removeUser } from "../store/thunks/removeUser";
import AddBtn from "./AddBtn";
import { addUser } from "../store/thunks/addUser";
import { useThunk } from "../hooks/use-thunks";

export default function ListOfUsers() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => state.users);

  const handleAddUser = () => {
    doCreateUser();
  };

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  let content;

  if (isLoadingUsers) {
    content = <Skeleton className="h-10 my-2" count={data.length} />;
  } else if (loadingUsersError) {
    content = <div> Error fetching data...</div>;
  } else {
    content = data.map((user) => {
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
  }

  return (
    <div className="flex-col flex gap-5">
      <div className="flex items-center justify-between">
        <h2 className="font-bold">List of Users</h2>

        <AddBtn loading={isCreatingUser} onclick={handleAddUser}>
          + Add User
        </AddBtn>

        {creatingUserError && "Error creating User..."}
      </div>

      <ul className="space-y-3">{content}</ul>
    </div>
  );
}
