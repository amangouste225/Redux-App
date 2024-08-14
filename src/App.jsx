import ListOfUsers from "./components/ListOfUsers";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <div className="w-[550px] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <ListOfUsers />
    </div>
  );
}

export default App;
