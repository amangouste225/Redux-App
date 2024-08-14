export default function User() {
  return (
    <li className={`border-2 border-black flex justify-between flex-col`}>
      <div
        className={`flex justify-between items-center w-full p-3  border-black`}
      >
        <div className="flex items-center gap-2">
          <span className="cursor-pointer flex justify-center items-center w-6 h-6 font-bold bg-red-600 text-white rounded-full">
            X
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`size-6 `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      <div className="p-3"></div>
    </li>
  );
}
