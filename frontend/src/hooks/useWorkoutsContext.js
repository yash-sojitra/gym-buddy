import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext);
    if(!context){
        return Error("you are accessing context out of the context provider tree!!")
    }
    return context;
}