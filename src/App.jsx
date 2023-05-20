import React from 'react'
import './App.css'

import {Demo , About} from './components';

const App = () => {
	return (
		<main>
			<div className = 'main'>
				<div className = 'gradient'/>
			</div>

			<div className = 'app'>
				<About />
				<Demo />
			</div>
		</main>
	)
}

export default App