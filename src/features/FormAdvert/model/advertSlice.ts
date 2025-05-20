import { createSlice, createAction } from "@reduxjs/toolkit"
import { Pidorok } from "../../editContainer/type/editType";
import { StateBuy } from "../type/form.advert.type";

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
const postBuyTool = createAction(
    `${advertSlice.name}/postBuyTool`,
    (data) => ({ payload: data })
);
const postRentTool = createAction(
    `${advertSlice.name}/postRentTool`,
    (data) => ({ payload: data })
);

export const AdvertActions = {
    ...advertSlice.actions,
    submitAdvert,
    postBuyTool,
    postRentTool
}

export default advertSlice.reducer