/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions'

export const fetchMission = createAsyncThunk('post/fetchPost', async () => {
  return fetch(url)
  .then(res => res.json());
})

const initialState = {
  missionsData: [],
  isSubscribed: false,
  isLoading: false,
  error: ''
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    subscribe(state) {
      state.isSubscribed = true;
    },
  },
  extraReducers: (builder) =>{
    builder.addCase(fetchMission.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMission.fulfilled, (state, action) => {
      state.isLoading = false;
      state.missionsData = action.payload;
    });
    builder.addCase(fetchMission.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    })
  }
});

export default missionsSlice.reducer;
