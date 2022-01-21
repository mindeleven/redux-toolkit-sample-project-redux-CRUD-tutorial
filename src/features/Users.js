import { createSlice } from '@reduxjs/toolkit';
import { UsersData } from '../data/FakeDate';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    value: UsersData
  },
  reducers: {
    addUser: (state, action) => {
      // write code for adding a user
    }
  }
});
