const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter : 0
}

//Reducer :  receives two arguements- current/old state and action and returns updated state
const reducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter : state.counter + 1
        }
    }

    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter : state.counter + action.value
        }
    }
    return state;
}

//Store : receives reducer as it is tightly bond to it
const store = createStore(reducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
    console.log("[Subscription]", store.getState())
});

//Dispatch Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value : 10});
console.log(store.getState());
