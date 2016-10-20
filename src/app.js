import React from 'react';

const Hello = React.createClass({
	render () {
		return <div> Реакт, {this.props.name}</div>
	}
});

React.render(<Hello name="0k"/>, document.body);