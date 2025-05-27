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
const submitRatingid = createAction(
    `${ratingSlice.name}/submitRatingid`,
    (data: string) => ({payload : data})
);

export const RatingActions = {
    ...ratingSlice.actions,
    submitRating,
    submitRatingid
}


export default ratingSlice.reducer