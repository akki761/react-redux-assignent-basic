import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
                <CounterControl label="Add 5" clicked={this.props.onAddition}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstraction}  />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr : state.counter
    };
}

const dispatchActions = (dispatch) => {
    return {
        onIncrement : () => dispatch({type : 'INCREMENT'}),
        onDecrement : () => dispatch({type : 'DECREMENT'}),
        onAddition : () => dispatch({type : 'ADD5'}),
        onSubstraction : () => dispatch({type : 'SUBS5'})
    };
}
export default connect(mapStateToProps, dispatchActions)(Counter);