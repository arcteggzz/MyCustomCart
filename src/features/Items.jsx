import { createSlice } from "@reduxjs/toolkit";
// json data
import { ItemsData } from "../ItemList";

const initialState = {
    value: ItemsData
}

export const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers:{
        addItem:(state, action)=>{
            state.value.push(action.payload);
        }
    }
})

export default itemSlice.reducer;
export const { addItem } = itemSlice.actions