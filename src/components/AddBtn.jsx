import { GoSync } from "react-icons/go";

export default function AddBtn({ children, onclick, loading, type }) {
  return (
    <button
      disabled={loading}
      onClick={onclick}
      className={`${
        type === "AddUser" && "border-2 border-black"
      } border-black"} px-5 py-1 `}
    >
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
}
