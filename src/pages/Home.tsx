import React from 'react'
import { NavLink } from 'react-router-dom'
import { APP_TITLE } from '../App'
import MainLayout from '../layouts/MainLayout'

const PAGE_TITLE = 'Home'

const Home: React.FC = () => {
	return (
		<MainLayout title={APP_TITLE} h1={PAGE_TITLE}>
			<div className="page-contents">
				<p>
					This is home page. You can navigate to{' '}
					<NavLink to={'/sale'}>Sale</NavLink> page
				</p>
			</div>
		</MainLayout>
	)
}

export default Home
