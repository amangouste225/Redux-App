import AddBtn from "./AddBtn";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export default function AlbumList({ user }) {
  return (
    <div className="flex justify-between items-center py-2  border-t-2 px-10">
      <h2>Albums By {user.name} </h2>
      <AddBtn type="AddUser">+Add Album</AddBtn>
    </div>
  );
}
