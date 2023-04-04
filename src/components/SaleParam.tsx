import React from 'react'

interface SaleParams {
	label: string
	value: string
}

const SaleParam: React.FC<SaleParams> = ({ value, label }) => {
	return (
		<div className="sale__param">
			<label>{label}: </label>
			{value}
		</div>
	)
}

export default SaleParam
