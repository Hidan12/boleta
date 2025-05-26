import { createReducer } from "@reduxjs/toolkit"
import { clearEvent, eventPage } from "../action/eventAction"

const initialState = {
    eventInfo: {}
}

const reducerEvent = createReducer(initialState, (builder)=>{
    builder.addCase(eventPage, (state, action)=>{
        state.eventInfo = action.payload
    })
    .addCase(clearEvent, (state)=>{
        state.eventInfo = {}
    })
})
export {reducerEvent}