import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

const workoutsReducer = (state, action) => {
    switch (action.type) {
        case "SET_WORKOUT":
            return {
                workouts:action.payload
            }
        case "GET_WORKOUT":
            return {
                workouts:[action.payload,...state.workouts]
            }
        case "DEL_WORKOUT":
            return {
                workouts:state.workouts.filter( workout => workout._id !== action.payload)
            }
    
        default:
            return state
    }
}

export const WorkoutsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer( workoutsReducer, {
        workouts:null
    })

    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
}