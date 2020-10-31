import * as actionTypes from '../action';

const initialState = {
    results : []
}   
const result = (state = initialState, action) => {
    if(action.type === actionTypes.STORE_RESULT){
        return {
            ...state,
            results :  state.results.concat({id: new Date(),val: action.result})
        }
    } else if(action.type === actionTypes.DELETE_RESULT){
        const index = state.results.findIndex((result) => {
                            return result.id === action.id
                        });
        const resultArr = [...state.results];
        resultArr.splice(index, 1);
        //or use filter to filter the array
        return {
            ...state,
            results :  resultArr
        }
    }else{
        return state;
    }
}

export default result;