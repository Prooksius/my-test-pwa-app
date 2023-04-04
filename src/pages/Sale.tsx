import React from 'react'
import { APP_TITLE } from '../App'
import SalesForm from '../components/SalesForm'
import SalesHeader from '../components/SalesHeader'
import SalesTable from '../components/SalesTable'
import SalesTable2 from '../components/SalesTable2'
import MainLayout from '../layouts/MainLayout'

const PAGE_TITLE = 'Digital Sale Block'

const Sale: React.FC = () => {
	return (
		<MainLayout title={APP_TITLE} h1={PAGE_TITLE}>
			<div className="page-contents full">
				<SalesHeader />
				<div className="sale__form">
					<div className="row">
						<div className="col-12 col-md-7">
							<SalesForm />
						</div>
						<div className="col-12 col-md-5">
							<div className="row">
								<div className="col-12">
									<SalesTable />
								</div>
								<div className="col-12">
									<SalesTable2 />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}

export default Sale
