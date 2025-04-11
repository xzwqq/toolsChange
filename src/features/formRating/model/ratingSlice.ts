import { createSlice, createAction } from "@reduxjs/toolkit"

const initialState = {
    succses: null,
}

const ratingSlice = createSlice({
    name: 'rating',
    initialState,
    reducers:{
        setSuccses: (state, action) =>{
            state.succses = action.payload
        }
    }
})
const submitRating = createAction(
    `${ratingSlice.name}/submitRating`,
    (data) => ({ payload: data })
);

export const RatingActions = {
    ...ratingSlice.actions,
    submitRating,
}


export default ratingSlice.reducer