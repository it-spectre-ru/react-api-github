const config = {
	'localhost': {
		authUrl: 'https://react-oauth.herokuapp.com/authenticate',
		clientId: 'b69a46c938af54882e4c'
	},

	'label.surge.sh': {
		authUrl: 'https://react-oauth-prod.herokuapp.com/authenticate',
		clientId: ''
	}
}[location.hostname];

export default config