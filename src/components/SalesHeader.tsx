import React, { useState } from 'react'
import Select from 'react-select'
import { toastAlert } from '../layouts/MainLayout'

interface TSelectOption {
	label: string
	value: string
}

const runOptions: TSelectOption[] = [
	{
		label: 'Item 1',
		value: '1',
	},
	{
		label: 'Item 2',
		value: '2',
	},
]

const emptyOption: TSelectOption = {
	label: '',
	value: '',
}

const SalesHeader: React.FC = () => {
	const [select, setSelect] = useState<TSelectOption | null>(null)
	return (
		<div className="sales-header">
			<button
				type="button"
				className="btn btn-transparent btn-border"
				data-tooltip-id="my-tooltip"
				data-tooltip-content="Some tip for this button"
				data-tooltip-place="right"
				onClick={() => toastAlert('Some action info', 'warning')}
			>
				End Auction
			</button>
			<h2>Manheim Pennsylvania 10/08/2021 9:30 AM</h2>
			<div className="sales-header__search">
				<Select
					value={select}
					placeholder="RUN"
					className="multiselect"
					classNamePrefix="inner"
					components={{
						IndicatorSeparator: () => null,
					}}
					onChange={(selectedOption) => {
						setSelect(selectedOption ? selectedOption : emptyOption)
					}}
					options={runOptions}
				/>
				<input
					className="input"
					placeholder="1621"
					data-tooltip-id="my-tooltip"
					data-tooltip-content="Search"
					data-tooltip-place="top"
				/>
				<button
					type="button"
					className="btn btn-white btn-small"
					data-tooltip-id="my-tooltip"
					data-tooltip-content="Another tip for that button"
					data-tooltip-place="top"
					onClick={() => toastAlert('Action started...', 'success')}
				>
					GO
				</button>
			</div>
		</div>
	)
}

export default SalesHeader
