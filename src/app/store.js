import { configureStore } from "@reduxjs/toolkit";
import { apiRest } from "../api/apiRest";

export default configureStore({
  reducer: {
    [apiRest.reducerPath]: apiRest.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiRest.middleware),
});
