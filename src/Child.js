import React, { useContext } from 'react';
import counterContext from './CounterContext.js';

const Child = () => {
	
	let counterValue = useContext(counterContext)
	console.log(counterValue)
	return(
			<div>
				<h2>This is first child</h2>
				<h4>Counter Value is: {counterValue[0]}</h4>

				<button onClick={()=> {counterValue[1](++counterValue[0])}}>Increament</button>
			</div>
		)
}

export default Child;