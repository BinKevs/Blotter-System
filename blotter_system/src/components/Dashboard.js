import { Component } from 'react';
import { Link } from 'react-router-dom';
class Dashboard extends Component {
	render() {
		return (
			<>
				<div className="container">
					<div className="row text-secondary my-4">
						<div className="col-4 text-center">
							<div className="card_cust p-3">
								<div style={{ fontSize: '3em' }}>
									<i class="fal fa-watch"></i>
								</div>
								<h1 className="text-dark">148</h1>
								<hr />
								<h4>Number of ON-GOING cases for this month (June)</h4>
							</div>
						</div>
						<div className="col-4 text-center ">
							<div className="card_cust p-3">
								<div style={{ fontSize: '3em' }}>
									<i class="fal fa-clipboard-check"></i>
								</div>
								<h1 className="text-dark">148</h1>
								<hr />
								<h4>Number of RESOLVED cases for this month (June)</h4>
							</div>
						</div>
						<div className="col-4 text-center ">
							<div className="card_cust p-3">
								<div style={{ fontSize: '3em' }}>
									<i class="fal fa-users"></i>
								</div>
								<h1 className="text-dark">48,899</h1>
								<hr />
								<h4 className="my-4">Number of residence</h4>
							</div>
						</div>
					</div>
					<div className="row text-secondary my-4">
						<div className="col-12 text-center ">
							<div className="card_cust p-5">
								<h2 className="text-danger">
									Blotter/s that more than 2 months unresolved
								</h2>
								<table className="table table-striped">
									<thead>
										<tr>
											<th className="text-center">ID</th>
											<th className="text-center">Incident's Date</th>
											<th className="text-center">Report's Date</th>
											<th className="text-center">Place</th>
											<th className="text-center">Complainant's Name</th>
											<th className="text-center">Respondent's Name</th>
											<th className="text-center">Fact On Actual Crime</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="text-center">Test Test</td>
											<td className="text-center">Test Test</td>
											<td className="text-center">Test Test</td>
											<td className="text-center">Test Test</td>
											<td className="text-center">Test Test</td>
											<td className="text-center">Test Test</td>
											<td className="text-center">
												Test Test Test Test Test Test Test Test Test Test
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Dashboard;
