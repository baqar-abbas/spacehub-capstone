/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions'

export const fetchMission = createAsyncThunk('post/fetchPost', async () => {
  return fetch(url)
  .then(res => res.json());
})

const initialState = {
  missionsData: [],
  isSubscribed: true,
  isLoading: false,
  error: ''
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    subscribe(state, {payload}) {
      state.missionsData.map((mission) => {
        if (mission.mission_id === payload) {
          mission.isSubscribed = !mission.isSubscribed;
          console.log(mission.isSubscribed, payload)
        }
      })
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

export const { subscribe } = missionsSlice.actions
export default missionsSlice.reducer;
