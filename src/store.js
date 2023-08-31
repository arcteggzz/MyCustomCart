import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./features/Items";
import visibilityReducer from "./features/Visibility";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    visibility: visibilityReducer,
  },
});
