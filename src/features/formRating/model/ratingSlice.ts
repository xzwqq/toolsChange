import { createSlice, createAction } from "@reduxjs/toolkit"

const initialState = {
    succses: [],
    status: true,
}

const ratingSlice = createSlice({
    name: 'rating',
    initialState,
    reducers:{
        setSuccses: (state, action) =>{
            state.succses = action.payload
            state.status = false
        },
    }
})
const submitRating = createAction(
    `${ratingSlice.name}/submitRating`
);

export const RatingActions = {
    ...ratingSlice.actions,
    submitRating,
}


export default ratingSlice.reducer