import { createSlice, createAction } from "@reduxjs/toolkit"
import { Pidorok } from "../../editContainer/type/editType";

interface editState {
    container: Pidorok | null;
    visible: boolean;
}

const initialState: editState ={
    container: null,
    visible: false,
}
const advertSlice = createSlice({
    name: 'advert',
    initialState,
    reducers: {
        setSuccses: (state, action) =>{
            state.container = action.payload
        },
        setVisible: (state, action) => {
            state.visible = action.payload
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