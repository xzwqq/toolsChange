import { createAction, createSlice } from "@reduxjs/toolkit";
import { Pidorok, PidorokSend } from "../type/editType";


interface editState {
    container: Pidorok | null,
    error: string,
    isLoading: boolean,
}

const initialState: editState ={
    container: null,
    error: '',
    isLoading: true,
}

const editSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {
        setSuccses: (state, action) =>{
            state.container = action.payload
            state.isLoading = false
        },
        setError: (state, action) =>{
            state.error = action.payload
        }
    }
})
const submitMyContainer = createAction(
    `${editSlice.name}/submitMyContainer`,
    (data: PidorokSend) => ({ payload: data })
);

export const EditActions = {
    ...editSlice.actions,
    submitMyContainer,
    submitGetContainer: createAction<string>(`${editSlice.name}/submitGetContainer`),
};
 


export default editSlice.reducer