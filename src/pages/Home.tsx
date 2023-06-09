import React from 'react'
import { useOktaAuth } from '@okta/okta-react'
import { Link, NavLink } from 'react-router-dom'
import { APP_TITLE } from '../App'
import MainLayout from '../layouts/MainLayout'

const PAGE_TITLE = 'Home'

const Home: React.FC = () => {
	const { oktaAuth, authState } = useOktaAuth()

	const login = async () => oktaAuth.signInWithRedirect()

	return (
		<MainLayout title={APP_TITLE} h1={PAGE_TITLE}>
			<div className="page-contents">
				{!authState && <div>Loading...</div>}
				{!authState?.isAuthenticated && (
					<div>
						<p>Not Logged in yet</p>
						<br />
						<button onClick={login} className="btn btn-blue">
							Login
						</button>
					</div>
				)}
				{authState?.isAuthenticated && (
					<div>
						<p>Welcome {authState.idToken?.claims.name}</p>
						<br />
						<p>
							You can visit <Link to={'/protected/sale'}>Sales</Link> page
						</p>
					</div>
				)}
			</div>
		</MainLayout>
	)
}

export default Home
