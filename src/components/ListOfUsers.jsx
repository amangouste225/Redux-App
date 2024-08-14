import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";

import AddBtn from "./AddBtn";
import { addUser } from "../store/thunks/addUser";
import { useThunk } from "../hooks/use-thunks";
import User from "./User";
import { fetchUsers } from "../store/store";
import { useSelector } from "react-redux";

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
    content = data.map((user) => <User key={user.id} user={user} />);
  }

  return (
    <div className="flex-col flex gap-5">
      <div className="flex items-center justify-between">
        <h2 className="font-bold">List of Users</h2>

        <AddBtn loading={isCreatingUser} type="AddUser" onclick={handleAddUser}>
          + Add User
        </AddBtn>

        {creatingUserError && "Error creating User..."}
      </div>

      <ul className="space-y-3">{content}</ul>
    </div>
  );
}
