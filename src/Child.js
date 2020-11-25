import React, { useContext } from 'react';
import counterContext from './CounterContext.js';

const Child = () => {
	
	let counterValue = useContext(counterContext)
	console.log(counterValue)
	return(
			<div>
				<h2>This is first child</h2>
				<h2>This is first child</h2>
			</div>
		)
}

export default Child;