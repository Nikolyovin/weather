import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { defaultCoordinates } from "../../helpers"

type initialStateType = { 
    activeCoordinates: number[] 
}

const initialState: initialStateType = {
    activeCoordinates: defaultCoordinates
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        activeCoordinates(state, action: PayloadAction<number[]>){
            state.activeCoordinates = action.payload
        }
    }
})

export const weatherActions = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer



