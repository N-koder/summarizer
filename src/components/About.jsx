			// Big title telling what app does
import React from 'react'
import {logo} from '../accessories/assets';

const About = () => {
	return (
		<header className = 'w-full flex justify-center items-center flex-col'>

			<nav className = 'flex items-center w-full mb-10 pt-3' style = {{"justifyContent" : "space-between" , "marginBottom" : "37px" , "paddingTop" : "3px"}}>
				
				<img src = {logo} alt = 'logo' className = 'w-28 object-contain'/>

				<button
					onClick = {() => window.open('https://github.com/N-koder')}
					className = 'black_btn'
				>
					<span style = {{"marginRight" : "5px"}}>GitHub</span> 
					<i className="fa-brands fa-github"></i>
				</button>
			</nav>

			<h1 className ='head_text'> Summarize articles with <br className = 'max-md:hidden'/> <span className = 'blue_gradient'>OpenAI GPT-4</span></h1>

			<h2 className = 'desc'> 
				This is an open-source article summarizer that transforms lengthy and complex articles into clear and concise summaries!
			</h2>
		</header>
	)
}

export default About