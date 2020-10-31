import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/action';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 10" clicked={this.props.onAddition}  />
                <CounterControl label="Subtract 20" clicked={this.props.onSubstraction}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storeResult.map((result) => {
                        return <li onClick={() => this.props.onDeleteResult(result.id)} key={result.id}>{result.val}</li>
                    }
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr : state.counter.counter,
        storeResult : state.result.results
    };
}

const dispatchActions = (dispatch) => {
    return {
        onIncrement : () => dispatch({type : actionTypes.INCREMENT}),
        onDecrement : () => dispatch({type : actionTypes.DECREMENT}),
        onAddition : () => dispatch({type : actionTypes.ADD, val : 10}),
        onSubstraction : () => dispatch({type : actionTypes.SUB, val : 20}),
        onStoreResult : (result) => dispatch({type : actionTypes.STORE_RESULT, result : result}),
        onDeleteResult : (id) => dispatch({type : actionTypes.DELETE_RESULT, id : id})
    };
}
export default connect(mapStateToProps, dispatchActions)(Counter);