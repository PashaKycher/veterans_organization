import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    isOpen: false,
};

const loginSlice = createSlice({
    name: "login",
    initialState: initialValue,
    reducers: {
        setIsOpen: (state, action) => {
            state.isOpen = action.payload;
        }
    }
})

export const { setIsOpen } = loginSlice.actions;
export default loginSlice.reducer