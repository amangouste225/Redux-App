import AddBtn from "./AddBtn";

export default function AlbumList({ user }) {
  // const renderList = albumList.data.map((album, i) => {
  //   console.log(album.albumId);
  //   return (
  //     <li key={i} className="px-10">
  //       <div
  //         className={`flex justify-between my-2 items-center p-3 border-2  border-black`}
  //       >
  //         <div className="flex items-center gap-2">
  //           <span
  //             onClick={() => deleteAlbum(album.albumId)}
  //             className="cursor-pointer flex justify-center items-center w-6 h-6 font-bold bg-red-600 text-white rounded-full"
  //           >
  //             X
  //           </span>
  //           <h3>
  //             {album.albumName} #{i + 1}
  //           </h3>
  //         </div>
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           strokeWidth="1.5"
  //           stroke="currentColor"
  //           className="size-6"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             d="m19.5 8.25-7.5 7.5-7.5-7.5"
  //           />
  //         </svg>
  //       </div>
  //     </li>
  //   );
  // });

  return (
    <>
      <div className="flex justify-between items-center">
        <h2>Albums By </h2>
        <AddBtn>+Add Album</AddBtn>
      </div>
      {/* <ul>{renderList}</ul> */}
    </>
  );
}
