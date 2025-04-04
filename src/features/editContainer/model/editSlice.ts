import { createAction, createSlice } from "@reduxjs/toolkit";
import { Pidorok } from "../type/editType";


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

export const EditActions = {
    ...editSlice.actions,
    submitMyContainer: createAction<{ 
      data: { 
        type: string; 
        condition: string; 
        price: string; 
        categoryId: string; 
        manufacturerId: string; 
        description: string; 
      }; 
      files: File[]; 
      id: string; 
      filesToDelete?: string[];
    }>(`${editSlice.name}/submitMyContainer`),
    submitGetContainer: createAction<string>(`${editSlice.name}/submitGetContainer`),
};


export default editSlice.reducer