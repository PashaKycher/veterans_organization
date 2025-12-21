import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    user: {}
};

const userSlice = createSlice({
    name: "user",
    initialState: initialValue,
    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload
        },
        setUserLogout: (state, action) => {
            state.user = {}
        }
    }
})

export const { setUserData, setUserLogout } = userSlice.actions;
export default userSlice.reducer