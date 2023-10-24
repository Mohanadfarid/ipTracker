import { configureStore } from "@reduxjs/toolkit";
import ipDetailsReducer from "./ipDetailsSlice";
export default configureStore({
  reducer: { ipDetails: ipDetailsReducer },
  
});
