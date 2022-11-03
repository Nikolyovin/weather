import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type initialStateType = { 
    activeCoordinates: number[] | null
}

const initialState: initialStateType = {
    activeCoordinates: null
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



