import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState ={
    container: [],
}

const containerSlice = createSlice({
    name: 'container',
    initialState,
    reducers: {
        setSuccses: (state, action) =>{
            state.container = action.payload
        },
    }
})

export const ContainerActions = {
    ...containerSlice.actions,
    submitMyContainer: createAction(`${containerSlice.name}/submitMyContainer`),
    submitAllContainer: createAction(`${containerSlice.name}/submitAllContainer`),
    submitDeleteMyContainer: createAction<{ id: number }>(`${containerSlice.name}/submitDeleteMyContainer`),
}

export default containerSlice.reducer;