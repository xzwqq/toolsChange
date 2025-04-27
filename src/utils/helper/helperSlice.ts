import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    errorNetwork: null,
    sucsses: null,
}

const helperSlice = createSlice({
    name : 'helper',
    initialState,
    reducers : {
        setSucsses:(state, action) =>{
            state.sucsses = action.payload
        },
        setErrorNetwork: (state, action) =>{
            state.errorNetwork = action.payload
        },
    }
})

export const HelperActions = {
    ...helperSlice.actions
}

export default helperSlice.reducer