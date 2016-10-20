import React from 'react';
import localLinks from 'local-links';

export default React.createClass({

	onClick (event) {
		const pathname = localLinks.getLocalPathname(event)

		if (pathname) {
			event.preventDefault()  // tells navigate internaly
			app.router.history.navigate(pathname)
		}
	},

	render () {
		return (
			<div onClick={this.onClick}>
				<nav className='top-nav top-nav-light cf' role='navigation'>
					<input id='menu-toggle' className='menu-toggle' type='checkbox'/>
					<label htmlFor='menu-toggle'>Меню</label>
					<ul className='list-unstyled list-inline cf'>
						<li>ХабТагс</li>
						<li><a href='/repos'>Репозиторий</a></li>
						<li className='pull-right'>
							<a href='/logout'>Выйти</a>
						</li>
					</ul>
				</nav>
				<div className='container'>
					{this.props.children}
				</div>
			</div>
		)
	}
})