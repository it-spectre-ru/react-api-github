import React from 'react'
import NavHelper from '../components/nav-helper';

export default React.createClass({
	render () {
		return (
			<NavHelper className='container'>
				<header role='banner'>
					<h1>Метка</h1>
				</header>
				<div>
					<p>Lorem ipsum dolor sit.</p>
					<a href="/login" className='button button-large'>
						<span className='mega-octicon octicon-mark-github'>Войти с GitHub</span>
					</a>
				</div>
			</NavHelper>
		)
	}
})
