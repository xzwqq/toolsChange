import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState ={
    container: [] ,
    status: true
}

const containerSlice = createSlice({
    name: 'container',
    initialState,
    reducers: {
        setSuccses: (state, action) =>{
            if(!action.payload.length) {
                state.container = []
            }
            state.container = action.payload
            state.status = false
        },
        reset: () => initialState,
    }
})

export const ContainerActions = {
    ...containerSlice.actions,
    submitMyContainer: createAction(`${containerSlice.name}/submitMyContainer`),
    submitAllContainer: createAction(`${containerSlice.name}/submitAllContainer`),
    submitDeleteMyContainer: createAction<{ id: number }>(`${containerSlice.name}/submitDeleteMyContainer`),
}

export default containerSlice.reducer;