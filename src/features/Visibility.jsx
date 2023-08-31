import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
};

export const visibilitySlice = createSlice({
  name: "visibility",
  initialState: initialState,
  reducers: {
    toggleVisibility: (state, action) => {
      state.visible = !state.visible
    },
  },
});

export default visibilitySlice.reducer;
export const { toggleVisibility } = visibilitySlice.actions;
