import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isLoading : true,
    errorNetwork: null,
    sucsses: null,
}

const helperSlice = createSlice({
    name : 'helper',
    initialState,
    reducers : {
        setIsloadingSucsses: (state) =>{
            state.isLoading = false
        },
        setSucsses:(state, action) =>{
            state.sucsses = action.payload
        },
        setErrorNetwork: (state, action) =>{
            state.errorNetwork = action.payload
        },
        reset: () => initialState,
    }
})

export const HelperActions = {
    ...helperSlice.actions
}

export default helperSlice.reducer