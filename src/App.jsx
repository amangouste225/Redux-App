import AddBtn from "./components/AddBtn";
import ListOfUsers from "./components/ListOfUsers";

// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

function App() {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <div className="w-[550px] flex-col flex gap-5">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">List of Users</h2>
          <AddBtn>+ Add User</AddBtn>
        </div>

        <ListOfUsers />
      </div>
    </div>
  );
}

export default App;
