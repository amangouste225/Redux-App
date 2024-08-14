export default function AlbumList({ children }) {
  return (
    <ul className="flex justify-between items-center px-10 space-y-2">
      {children}
    </ul>
  );
}
