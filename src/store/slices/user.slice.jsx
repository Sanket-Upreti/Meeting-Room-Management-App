import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
};

const userRegisteredSlice = createSlice({
    name: "userRegistered",
    initialState,
    reducers: {
        getUserRegistered: (state, action) => {
            state.data = action.payload;
        },
    },
});

export default userRegisteredSlice.reducer;
export const { getUserRegistered } = userRegisteredSlice.actions;
