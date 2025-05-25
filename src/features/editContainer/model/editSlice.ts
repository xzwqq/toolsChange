import { createAction, createSlice } from "@reduxjs/toolkit";
import { Pidorok, PidorokSend } from "../type/editType";

interface editState {
    container: Pidorok | null,
    isloading: boolean;
}

const initialState: editState ={
    container: null,
    isloading: false
}

const editSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {
        setSuccses: (state, action) =>{
            state.container = action.payload
            state.isloading = false
        },
        setIsLoading: (state) =>{
            state.isloading = true
        },
    }
})
const submitMyContainer = createAction(
    `${editSlice.name}/submitMyContainer`,
    (data: PidorokSend) => ({ payload: data })
);
const submitGetContainer = createAction(
    `${editSlice.name}/submitGetContainer`,
    (data: string) => ({ payload: data })
);

export const EditActions = {
    ...editSlice.actions,
    submitMyContainer,
    submitGetContainer,
};
 


export default editSlice.reducer