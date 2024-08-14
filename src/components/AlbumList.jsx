import AddBtn from "./AddBtn";

export default function AlbumList() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2>Albums By </h2>
        <AddBtn>+Add Album</AddBtn>
      </div>
    </>
  );
}
