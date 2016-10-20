import React from 'react';

require('./styles/main.styl');

const Hello = React.createClass({
	render () {
		return <div> Реакт, {this.props.name}</div>
	}
});

React.render(<Hello name="0k"/>, document.body);