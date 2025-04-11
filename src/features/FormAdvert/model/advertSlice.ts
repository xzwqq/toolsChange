import { createSlice, createAction } from "@reduxjs/toolkit"
import { Pidorok } from "../../editContainer/type/editType";

interface editState {
    container: Pidorok | null,
}

const initialState: editState ={
    container: null,
}
const advertSlice = createSlice({
    name: 'advert',
    initialState,
    reducers: {
        setSuccses: (state, action) =>{
            state.container = action.payload
        }
    }
})

const submitAdvert = createAction(
    `${advertSlice.name}/submitAdvert`,
    (data) => ({ payload: data })
);

export const AdvertActions = {
    ...advertSlice.actions,
    submitAdvert,
}

export default advertSlice.reducer