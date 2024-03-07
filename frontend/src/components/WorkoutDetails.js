import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const WorkoutDetails = ({ workout }) => {

    const { dispatch } = useWorkoutsContext();

    const handleClick = async () => {

        const response = await fetch("/api/workouts/" + workout._id, {
            method: "DELETE"
        })
        // const json = response.json();

        if (!response.ok) {
            return Error("can't delete")
        }
        else {
            dispatch({ type: "DEL_WORKOUT", payload: workout._id })
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg):</strong> {workout.load}</p>
            <p><strong>reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick} >delete</span>
        </div>
    );
}

export default WorkoutDetails;