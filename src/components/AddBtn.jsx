export default function AddBtn({ children, onclick }) {
  return (
    <button onClick={onclick} className="border-2 px-5 py-1 border-black">
      {children}
    </button>
  );
}
