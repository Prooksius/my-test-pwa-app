import React, { useEffect, useState } from 'react'
import { toastAlert } from '../layouts/MainLayout'
import { SwitchIcon } from './icons/SwitchIcon'
import SaleParam from './SaleParam'

const SalesForm: React.FC = () => {
	const [active, setActive] = useState<boolean>(true)
	const [lane, setLane] = useState('01')
	const [run, setRun] = useState('3')
	const [mileage, setMileage] = useState('202')

	const switchActive = (condition: boolean) => {
		setActive(condition)
		if (condition) {
			toastAlert('Turned on!', 'success')
		} else {
			toastAlert('Turned off!', 'error')
		}
	}

	return (
		<div className="sales-form__container">
			<div className="sales-form__header">
				<h3>1GT49TE75LF 2020 SIERRA 35 4X4 CR CREW WHITE</h3>
				<div className="sales-form__header-switch">
					<label className="navy">GM</label>
					<SwitchIcon active={active} doSwitch={switchActive} />
				</div>
			</div>
			<div className="sales-form__subheader">
				<SaleParam label="Announced conditions" value="Previous Canadian;D" />
				<SaleParam label="General remarks" value="" />
				<SaleParam label="Private comment 2" value="" />
				<br />
				<div className="place__params">
					<div className="input-block">
						<label>LANE: </label>
						<input
							type="text"
							className="input"
							value={lane}
							onChange={(e) => setLane(e.target.value)}
						></input>
					</div>
					<div className="input-block">
						<label>RUN: </label>
						<input
							type="text"
							className="input"
							value={run}
							onChange={(e) => setRun(e.target.value)}
						></input>
					</div>
					<div className="input-block">
						<label>MILEAGE: </label>
						<input
							type="text"
							className="input"
							value={mileage}
							onChange={(e) => setMileage(e.target.value)}
						></input>
					</div>
				</div>
			</div>
			<div className="sales-form__content">
				<div className="row">
					<div className="col-12 col-sm-6 col-md-4">
						<SaleParam label="Account" value="" />
						<SaleParam label="Condition" value="" />
						<SaleParam label="Days Inv" value="74" />
						<SaleParam label="Damage" value="182.22" />
						<SaleParam label="MSRP" value="" />
					</div>
					<div className="col-12 col-sm-6 col-md-4">
						<SaleParam label="Trim" value="SLE" />
						<SaleParam label="Cert" value="" />
						<SaleParam label="Time run" value="" />
						<SaleParam label="ARB info" value="" />
						<SaleParam label="BB Value" value="54925" />
					</div>
					<div className="col-12 col-sm-6 col-md-4">
						<SaleParam label="Grade" value="Grade 5.0" />
						<SaleParam label="Appraisal" value="" />
						<SaleParam label="RESL" value="" />
						<SaleParam label="Prior Sale" value="0" />
						<SaleParam label="BB Date" value="2021/10/01" />
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-sm-6 col-md-6">
						<SaleParam label="MMR" value="54300" />
					</div>
					<div className="col-12 col-sm-6 col-md-6">
						<SaleParam
							label="Options"
							value="8G-AT-AC-PC-ABS-EW-DL-CI-CC-FM-HT-4X4-TL-DAB"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SalesForm
