import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeUser } from "../store/store";
import { useThunk } from "../hooks/use-thunks";
import AddBtn from "./AddBtn";

export default function User({ user }) {
  const { name, id } = user;

  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleDelete = () => {
    doRemoveUser(user);
  };

  return (
    <li className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex items-center gap-2">
          <AddBtn loading={isLoading} onclick={handleDelete}>
            <RiDeleteBin6Line />
          </AddBtn>

          {error && <div>Error deleting user.</div>}
          {name}
        </div>
        <IoIosArrowDown />
      </div>
    </li>
  );
}
