import * as actionTypes from '../action';

const initialState = {
    counter : 0
}   
const counter = (state = initialState, action) => {
    if(action.type === actionTypes.INCREMENT){
        return {
            ...state,
            counter : state.counter + 1
        }
    } else if(action.type === actionTypes.DECREMENT){
        return {
            ...state,
            counter : state.counter - 1
        }
    } else if(action.type === actionTypes.ADD){
        return {
            ...state,
            counter : state.counter + action.val
        }
    } else if(action.type === actionTypes.SUB){
        return {
            ...state,
            counter : state.counter - action.val
        }
    } else{
        return state;
    }
}

export default counter;