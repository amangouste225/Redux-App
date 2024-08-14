import { GoSync } from "react-icons/go";

export default function AddBtn({ children, onclick, loading }) {
  return (
    <button
      disabled={loading}
      onClick={onclick}
      className="border-2 px-5 py-1 border-black"
    >
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
}
