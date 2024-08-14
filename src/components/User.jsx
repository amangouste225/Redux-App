import { RiDeleteBin6Line } from "react-icons/ri";
import { removeUser } from "../store/store";
import { useThunk } from "../hooks/use-thunks";
import AddBtn from "./AddBtn";
import AlbumList from "./AlbumList";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { useState } from "react";

export default function User({ user }) {
  const [expanded, setExpanded] = useState(false);

  const { name, id } = user;

  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleDelete = () => {
    doRemoveUser(user);
  };

  const handleClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <li className="mb-2 border rounded" onClick={handleClick}>
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex items-center gap-2">
          <AddBtn loading={isLoading} onclick={handleDelete}>
            <RiDeleteBin6Line />
          </AddBtn>

          {error && <div>Error deleting user.</div>}
          {name}
        </div>
        {expanded ? <GoChevronLeft /> : <GoChevronDown />}
      </div>
      {expanded && <AlbumList user={user} />}
    </li>
  );
}
