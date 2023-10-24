import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getIpDetails } from "../ApisHandller";

export const getLocationDetails = createAsyncThunk(
  "ipDetails/getLocationDetails",
  async (ip, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data=await getIpDetails(ip)

      if(await data.code) throw new Error(data.messages);
      return data;
    } catch (error) {

      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isLoading: false,
  error:"",
  data: {
    ip: "",
    country: "",
    city: "",
    timezone: "",
    isp: "",
    lat: "",
    lng: "",
  },
};
const ipDetailsSlice = createSlice({
  initialState,
  name: "ipDetails",
  reducers: {
    clearIpDetails: (state) => {
      state.data.city = "";
      state.data.country = "";
      state.data.ip = "";
      state.data.isp = "";
      state.data.lat = "";
      state.data.lng = "";
      state.data.timezone = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLocationDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error=''

      state.data.ip = action.payload.ip;
      state.data.country = action.payload.location.country;
      state.data.city = action.payload.location.city;
      state.data.timezone = action.payload.location.timezone;
      state.data.isp = action.payload.isp;
      state.data.lat = action.payload.location.lat;
      state.data.lng = action.payload.location.lng;

    });
    builder.addCase(getLocationDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLocationDetails.rejected, (state,action) => {
      state.isLoading=false
      state.error=action.payload
    });
  },
});

export const { clearIpDetails } = ipDetailsSlice.actions;
export default ipDetailsSlice.reducer;
