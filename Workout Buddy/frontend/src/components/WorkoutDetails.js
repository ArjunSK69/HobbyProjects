import { useWorkoutsContext } from "../hooks/useWorkoutContext"

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()
    const handleClick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return (
        <div className="workout-detail">
            <div>
                <h4>{workout.title}</h4>
                <p><strong>Load (kg): </strong><span>{workout.load}</span></p>
                <p><strong>Reps: </strong><span>{workout.reps}</span></p>
                <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            </div>
            <div className="buttons">
                <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
            </div>
        </div>
    )
}

export default WorkoutDetails