import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumApi";

export const store = configureStore({
  reducer: {
    users: userReducer,
    // albums or [albumsApi.reducerPath]
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./thunks/fetchUser";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";

export { useFetchAlbumsQuery, useAddAlbumMutation } from "./apis/albumApi";
