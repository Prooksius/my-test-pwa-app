import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import 'react-tooltip/dist/react-tooltip.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sale from './pages/Sale'

export const APP_TITLE = 'APP'

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes location={window.location}>
				<Route path="/" element={<Home />}></Route>
				<Route path="/sale" element={<Sale />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
