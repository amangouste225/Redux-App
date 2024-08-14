import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/store";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import { removeUser } from "../store/thunks/removeUser";

export default function ListOfUsers() {
  const [isUserLoading, setIsUSerLoading] = useState(false);

  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.users);
  console.log(data);

  useEffect(() => {
    setIsUSerLoading(true);
    dispatch(fetchUsers())
      .unwrap()
      .then(() => {
        console.log("SUCCESS");
      })
      .catch(() => {
        console.log("FAILED");
      });
  }, [dispatch]);

  if (isLoading) return <Skeleton className="h-10" count={data.length} />;

  if (error) return <div> Error fetching data...</div>;

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

  return <ul className="space-y-3">{renderedList}</ul>;
}
