import React from 'react'
import { NavLink } from 'react-router-dom'
import { CalendarIcon } from './icons/CalendarIcon'
import { DomainsIcon } from './icons/DomainsIcon'

export const Navbar: React.FC = () => {
	return (
		<nav className="app-navbar">
			<ul>
				<li className="app-navbar__link">
					<NavLink to={'/'}>
						<span
							className="app-navbar__link-icon"
							data-tooltip-id="my-tooltip"
							data-tooltip-content="Home"
							data-tooltip-place="right"
						>
							<DomainsIcon />
						</span>
						<span className="app-navbar__link-title">Home</span>
					</NavLink>
				</li>
				<li className="app-navbar__link">
					<NavLink to={'/protected/sale'}>
						<span
							className="app-navbar__link-icon"
							data-tooltip-id="my-tooltip"
							data-tooltip-content="Sale"
							data-tooltip-place="right"
						>
							<CalendarIcon />
						</span>
						<span className="app-navbar__link-title">Sale</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
