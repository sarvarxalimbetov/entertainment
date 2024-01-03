import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        bookmarkedData: (state, action) => {
            state.data = [...state.data, action.payload]
        },
        unBookmarkedData: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload)
        }
    }
})

export const {
    bookmarkedData,
    unBookmarkedData
} = dataSlice.actions
export default dataSlice.reducer