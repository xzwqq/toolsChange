import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    errorNetwork: null,
    sucsses: null,
    numError: 0,
    numSuccses: 0,
}

const helperSlice = createSlice({
    name : 'helper',
    initialState,
    reducers : {
        setSucsses:(state, action) =>{
            state.sucsses = action.payload;
            state.numSuccses ++;
        },
        setErrorNetwork: (state, action) =>{
            state.errorNetwork = action.payload
            state.numError ++;
        },
        setNavigate: () =>{
            
        }
    }
})

export const HelperActions = {
    ...helperSlice.actions
}

export default helperSlice.reducer