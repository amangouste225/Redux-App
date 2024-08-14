import { RiDeleteBin6Line } from "react-icons/ri";
import {
  removeUser,
  useAddAlbumMutation,
  useFetchAlbumsQuery,
} from "../store/store";
import { useThunk } from "../hooks/use-thunks";
import AddBtn from "./AddBtn";
import AlbumList from "./AlbumList";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

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

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  const { data, Error, IsLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  let content;

  if (IsLoading) {
    content = <Skeleton count={3} />;
  } else if (Error) {
    content = <div>Error loading Albums</div>;
  } else {
    content = data?.map((album) => {
      return (
        <div key={album.id} className="px-10">
          <AlbumList key={album.id}>
            <li className="mb-2 border rounded w-full">
              <div className="flex p-2 justify-between items-center cursor-pointer">
                <div className="flex items-center gap-2">
                  <AddBtn loading={isLoading} onclick={handleDelete}>
                    <RiDeleteBin6Line />
                  </AddBtn>

                  {error && <div>Error deleting user.</div>}
                  {album.title}
                </div>
                {/* <div onClick={handleClick}>
                  {expanded ? <GoChevronLeft /> : <GoChevronDown />}
                </div> */}
              </div>
            </li>
          </AlbumList>
        </div>
      );
    });
  }

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
        <div onClick={handleClick}>
          {expanded ? <GoChevronLeft /> : <GoChevronDown />}
        </div>
      </div>
      {expanded && (
        <div className="flex items-center justify-between px-10 mb-3">
          <h2>Albums By {user.name} </h2>

          <AddBtn type="AddUser" onclick={handleAddAlbum}>
            +Add Album
          </AddBtn>
        </div>
      )}
      {expanded && content}
    </li>
  );
}
