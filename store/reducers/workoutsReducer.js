import {Workout_Programs} from '../../Screens/Program/workoutPrograms'
import {toggleFavorite} from '../actions/actionTypes';

const initialState= {
    workouts:Workout_Programs,
    favWorkouts:[]
}

const workoutReducer= (state= initialState, action) =>{

    switch(action.type){

        case toggleFavorite:
            const workout = state.workouts.find(workout=>workout.id===action.id);
            return {...state, favWorkouts: state.favWorkouts.concat(workout).reverse()}
        default:
            return state;
    }
}

export default workoutReducer;