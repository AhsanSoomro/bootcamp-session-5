import {useReducer} from 'react';
import {Component} from 'react';
import CounterReducer from './CounterReducer';

const Child2 = () => {

	let [state, dispatch] = useReducer(CounterReducer, 1)

	return (
		<div>
			<h3>This is the second child using Reducer</h3>
			<h3>Value of reducer state is: {state}</h3>
			<button onClick={()=>dispatch('INCREMENT')}>Increament reducer</button>
		</div>
	)
}

export default Child2;