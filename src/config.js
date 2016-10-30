const config = {
	'localhost': {
		authUrl: 'https://react-oauth.herokuapp.com/authenticate',
		clientId: 'b69a46c938af54882e4c'
	},

	'react-oauth.surge.sh': {
		authUrl: 'https://react-oauth-production.herokuapp.com/authenticate',
		clientId: '31aebc9ac7adc6d61dbe '
	}
}[window.location.hostname];

export default config