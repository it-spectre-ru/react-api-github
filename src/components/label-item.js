import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
	mixins: [ampersandMixin],

	onCancelClick (event) {
		event.preventDefault();
		this.props.label.editing = false
	},

	onEditClick (event) {
		event.preventDefault();
		this.props.label.editing = true
	},

	render () {
		const {label} = this.props;
		const cssColor = '#' + label.color;
		let content;

		// editing
		if (label.editing) {
			content = (
				<form className='label'>
					<span className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
					<input name='name'/>
					<input name='color'/>
					<button type='submit' className='button button-small'>Сохранить</button>
					<button onClick={this.onCancelClick} type='button' className='button button-small button-unstyled'>Отмена</button>
				</form>
			)
		} else {
			content = (
				<div className='label'>
					<span className='label-color' style={{backgroundColor: cssColor}}>&nbsp;</span>
					<span>{label.name}</span>
					<span onClick={this.onEditClick} className='octicon octicon-pencil'></span>
					<span className='octicon octicon-x'></span>
				</div>
			)
		}

		return (
			<div>
				{content}
			</div>
		)
	}
})