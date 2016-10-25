import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
import NavHelper from './components/nav-helper';

export default React.createClass({
	mixins: [ampersandMixin],
	displayName: 'Layout',

	render () {
		const {me} = this.props;
		return (
			<NavHelper>
				<nav className='top-nav top-nav-light cf' role='navigation'>
					<input id='menu-toggle' className='menu-toggle' type='checkbox'/>
					<label htmlFor='menu-toggle'>Меню</label>
					<ul className='list-unstyled list-inline cf'>
						<a href="/"><li>ХабТагс</li></a>
						<li><a href='/repos'>Репозиторий</a></li>
						<li className='pull-right'>
							<a href='/logout'>Выйти</a> {me.login}
						</li>
					</ul>
				</nav>
				<div className='container'>
					{this.props.children}
				</div>
			</NavHelper>
		)
	}
})