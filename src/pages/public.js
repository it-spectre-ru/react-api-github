import React from 'react'

export default React.createClass({
	render () {
		return (
			<div className='container'>
				<header role='banner'>
					<h1>Метка</h1>
				</header>
				<div>
					<p>Lorem ipsum dolor sit.</p>
					<a href="/login" className='button button-large'>
						<span className='mega-octicon octicon-mark-github'>Войти с GitHub</span>
					</a>
				</div>
			</div>
		)
	}
})
