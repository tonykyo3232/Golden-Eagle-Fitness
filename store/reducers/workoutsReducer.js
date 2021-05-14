import {Workout_Programs} from '../../Screens/Program/workoutPrograms'
const initialState= {
    workouts:Workout_Programs,
    favWorkouts:[]
}

const workoutReducer= (state= initialState, action) =>{
    return state;
}

export default workoutReducer;