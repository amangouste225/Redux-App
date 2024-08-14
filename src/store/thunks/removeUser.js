import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeUser = createAsyncThunk("users/remove", async (id) => {
  const response = await axios.delete(`http://localhost:3000/users/${id}`);

  return response.data;
});
