import React, { ReactNode, useState } from 'react'
import classNames from 'classnames'
import { Tooltip } from 'react-tooltip'
import { Navbar } from '../components/Navbar'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'

interface MainLayoutProps {
	title: string
	h1: string
	children: ReactNode
}

export function toastAlert(title: string, type = 'info') {
	if (type === 'info') {
		toast[type](title)
	} else if (type === 'warning') {
		toast[type](title)
	} else if (type === 'error') {
		toast.error(title)
	} else if (type === 'success') {
		toast.success(title)
	}
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, h1 }) => {
	const [sidebarWide, setSidebarWide] = useState<boolean>(
		localStorage.getItem('sidebarWide') === '1' ? true : false
	)

	const toggleSidebar = () => {
		const wide = !sidebarWide

		localStorage.setItem('sidebarWide', wide ? '1' : '0')

		setSidebarWide(wide)
	}

	return (
		<>
			<div className="App">
				<div className="app-container">
					<div
						className={classNames(['app-sidebar', { collapsed: !sidebarWide }])}
					>
						<div className="app-sidebar__container">
							<div className="app-title">
								<span className="app-title__title">{title}</span>
								<span
									className="app-title__sidebar-toggle"
									onClick={toggleSidebar}
								>
									<svg
										width="11"
										height="19"
										viewBox="0 0 11 19"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M9.625 17.3125L1.8125 9.5L9.625 1.6875"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
							</div>
							<Navbar />
						</div>
					</div>
					<div className="page-container">
						<div className="page-title">
							<h1 className="page-title__h1">{h1}</h1>
						</div>
						{children}
					</div>
				</div>
			</div>
			<Tooltip id="my-tooltip" />
			<ToastContainer position="top-right" autoClose={2000} theme={'colored'} />
		</>
	)
}

export default MainLayout
