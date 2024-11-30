import { createAsyncThunk } from "@reduxjs/toolkit";

// Get All User Data Api Call
export const getUser = createAsyncThunk("getUser", async () => {
  const response = await fetch("/api/v1/users");
});
