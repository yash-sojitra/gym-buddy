import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import {useAuthContext} from '../hooks/useAuthContext'

const Home = () => {

    const { workouts, dispatch } = useWorkoutsContext();
    const { user } = useAuthContext()
    // const [onAdd, setOnAdd] = useState(0)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/workouts",{
                headers:{
                    'Authorization':`Bearer ${user.token}`
                }
            })
            const json = await response.json()

            console.log(json);

            if (response.ok) {
                dispatch({ type: "SET_WORKOUT", payload: json })
            }
        }
        if (user) fetchData()
        
    }, [dispatch])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => {
                    return <WorkoutDetails key={workout._id} workout={workout} />
                })}
            </div>
            <WorkoutForm />
        </div>
    );
}

export default Home
