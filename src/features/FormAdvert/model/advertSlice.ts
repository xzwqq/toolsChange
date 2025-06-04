import { createSlice, createAction } from "@reduxjs/toolkit"
import { Pidorok } from "../../editContainer/type/editType";

interface editState {
    container: Pidorok | null;
    average: number ;
    visible: boolean;
}

const initialState: editState ={
    container: null,
    average: 0,
    visible: false,
}
const advertSlice = createSlice({
    name: 'advert',
    initialState,
    reducers: {
        setSuccses: (state, action) =>{
            state.container = action.payload
        },
        setAverage: (state, action) =>{
            state.average = action.payload
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
const createChatAction = createAction(
    `${advertSlice.name}/createChatAction`,
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
    postRentTool,
    createChatAction
}

export default advertSlice.reducer