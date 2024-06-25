import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import {useAuthContext} from '../hooks/useAuthContext'

const WorkoutForm = () => {

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!user) {
            setError('You must be loggedin')
        }

        const workout = { title, load, reps }

        const resposne = await fetch("/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json",
                'Authorization':`Bearer ${user.token}`,
            }
        })

        const json = await resposne.json()

        if (!resposne.ok) {
            setError(json.error)
            if (json.emptyFields) {
                setEmptyFields(json.emptyFields)
            }
        }

        if (resposne.ok) {
            setTitle("")
            setReps("")
            setLoad("")
            setEmptyFields([])
            dispatch({ type: "GET_WORKOUT", payload: json })
            setError(null)
            console.log("workout added successfully");
        }
    }

    return (
        <form action="" className="create">
            <h3>Add a new workout</h3>

            <label> Exercise Title </label>
            <input type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes("title") ? "error" : ""} />
            <label> Load </label>
            <input type="text"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyFields.includes("load") ? "error" : ""} />
            <label> Reps </label>
            <input type="text"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes("reps") ? "error" : ""} />

            <button onClick={handleSubmit}>Add workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default WorkoutForm;