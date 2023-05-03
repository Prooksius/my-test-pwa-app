import React, { useCallback, useEffect, useRef } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import 'react-tooltip/dist/react-tooltip.css'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Security, LoginCallback } from '@okta/okta-react'
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js'

import Home from './pages/Home'
import Sale from './pages/Sale'
import Account from './pages/Account'
import { RequiredAuth } from './components/SecureRoute'

export const APP_TITLE = 'APP'

const oktaAuth = new OktaAuth({
	issuer: process.env.REACT_APP_OKTA_ISSUER,
	clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
	redirectUri: window.location.origin + '/login/callback',
})

const App: React.FC = () => {
	const navigate = useNavigate()
  const navigateRef = useRef(navigate)

	// Allow for "stale" navigate  references since originalUri will be an absolute URL.
	const restoreOriginalUri = useCallback((_: any, originalUri = '/') => {
		const url = toRelativeUrl(originalUri, globalThis.location.origin)
		navigateRef.current(url)
	}, [])

	useEffect(() => {
		return () => {
			oktaAuth.options.restoreOriginalUri = undefined
		}
	}, [])

	return (
		<Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
			<Routes location={window.location}>
				<Route path="/" element={<Home />}></Route>
				<Route
					path="login/callback"
					element={<LoginCallback loadingElement={<h3>Loading...</h3>} />}
				/>
				<Route path="/protected" element={<RequiredAuth />}>
					<Route path="" element={<Account />} />
					<Route path="sale" element={<Sale />}></Route>
				</Route>
			</Routes>
		</Security>
	)
}

const AppWithRouterAccess = () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>
)

export default AppWithRouterAccess
