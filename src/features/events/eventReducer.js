import { sampleData } from "../../app/api/sampleData";
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./eventConstants";

const initialState = {
    events: sampleData
}


const eventReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_EVENT:
            return {
                // here the payload will be added the last(new event ) will create a new array with old + new

                ...state, events: [...state.events, payload]
            }

        case UPDATE_EVENT:
            return {
                  //here first it will filter the != values to new array and then payload (means the matching will be added at last after the update)
                ...state, events: [...state.events.filter(evt => evt.id !== payload.id), payload]

            }

        case DELETE_EVENT:
            return {
                // here filter will remove whose condition is not metting below means evt.id if equals to payload(eventId) then that will be removed
                ...state, events: [...state.events.filter(evt => evt.id !== payload)]
            }
        default:
            return state;



    }


}

export default eventReducer