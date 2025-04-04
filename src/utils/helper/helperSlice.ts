import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isLoading : false,
    errorNetwork: null,
}

const helperSlice = createSlice({
    name : 'helper',
    initialState,
    reducers : {
        setIsloadingSucsses: (state) =>{
            state.isLoading = false
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