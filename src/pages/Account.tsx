import React from 'react'
import { useOktaAuth } from '@okta/okta-react'
import { NavLink } from 'react-router-dom'
import { APP_TITLE } from '../App'
import MainLayout from '../layouts/MainLayout'

const PAGE_TITLE = 'Account'

const Account: React.FC = () => {
	const { oktaAuth, authState } = useOktaAuth()

	const login = async () => oktaAuth.signInWithRedirect()
	const logout = async () => oktaAuth.signOut()

	return (
		<MainLayout title={APP_TITLE} h1={PAGE_TITLE}>
			<div className="page-contents">
				{!authState && <div>Loading...</div>}
				{!authState?.isAuthenticated && (
					<div>
						<p>Not Logged in yet</p>
						<button onClick={login}>Login</button>
					</div>
				)}
				{authState?.isAuthenticated && (
					<div>
						<p>Logged in! Welcome!</p>
						<button onClick={logout}>Logout</button>
					</div>
				)}
			</div>
		</MainLayout>
	)
}

export default Account
