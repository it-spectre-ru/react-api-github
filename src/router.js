import app from 'ampersand-app';
import Router from 'ampersand-router';
import React from 'react';
import qs from 'qs';
import xhr from 'xhr';
import PublicPage from './pages/public';
import ReposPage from './pages/repo';
import Layout from './layout';


export default Router.extend({
	renderPage(page, opts = {layout: true}) {
		if (opts.layout) {
			page = (
				<Layout>
					{page}
				</Layout>
			)
		}

		React.render(page, document.body)
	},


	routes: {
		'': 'public',
		'repos': 'repos',
		'login': 'login',
		'auth/callback?:query': 'authCallback'
	},


	public () {
		this.renderPage(<PublicPage/>, {layout: false})
	},


	repos () {
		this.renderPage(<ReposPage/>)
	},


	login () {
		window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
				client_id: 'b69a46c938af54882e4c',
				redirect_uri: window.location.origin + '/auth/callback',
				scope: 'user,repo'
		})
	},

	authCallback (query) {
		query = qs.parse(query)
		console.log(query);

		xhr({
			url: 'https://react-oauth.herokuapp.com/authenticate/' + query.code,
			json: true
		}, (err, req, body) => {
			console.log(body);
			app.me.token = body.token;
		})
	}
})