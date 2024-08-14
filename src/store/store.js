import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    users: userReducer,
  },
});

export * from "./thunks/fetchUser";
