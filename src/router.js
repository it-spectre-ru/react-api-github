import app from 'ampersand-app';
import Router from 'ampersand-router';
import React from 'react';
import qs from 'qs';
import xhr from 'xhr';
import PublicPage from './pages/public';
import ReposPage from './pages/repos';
import RepoDetail from './pages/repo-detail';
import Layout from './layout';
import MessagePage from './pages/message';


function requiresAuth(handlerName) {
	return function () {
		if (app.me.token) {
			this[handlerName].apply(this, arguments)
		} else {
			this.redirectTo('/')
		}
	}
}

export default Router.extend({
	renderPage(page, opts = {layout: true}) {
		if (opts.layout) {
			page = (
				<Layout me={app.me}>
					{page}
				</Layout>
			)
		}

		React.render(page, document.body)
	},


	routes: {
		'': 'public',
		'repos': requiresAuth('repos'),
		'login': 'login',
		'logout': 'logout',
		'repo/:owner/:name': requiresAuth('repoDetail'),
		'auth/callback?:query': 'authCallback',
		'*fourOhfour': 'fourOhfour'
	},


	public () {
		this.renderPage(<PublicPage/>, {layout: false})
	},

	repos () {
		this.renderPage(<ReposPage repos={app.me.repos}/>)
	},

	repoDetail (owner, name) {
		const model = app.me.repos.getByFullName(owner + '/' + name);
		this.renderPage(<RepoDetail repo={model} labels={model.labels}/>)
	},

	login () {
		window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
				client_id: 'b69a46c938af54882e4c',
				redirect_uri: window.location.origin + '/auth/callback',
				scope: 'user,repo'
			})
	},

	authCallback (query) {
		query = qs.parse(query);
		console.log(query);

		xhr({
			url: 'https://react-oauth.herokuapp.com/authenticate/' + query.code,
			json: true
		}, (err, req, body) => {
			console.log(body);
			app.me.token = body.token;
			this.redirectTo('/repos')
		});

		this.renderPage(<MessagePage title='Получение данных...'/>)
	},

	logout () {
		window.localStorage.clear();
		window.location = '/'
	},

	fourOhfour () {
		this.renderPage(<MessagePage title='Ошибка 404' body='страница не найдена'/>)
	}
})