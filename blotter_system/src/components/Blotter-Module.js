import React, { Component } from 'react';
export class BlotterModule extends Component {
	render() {
		return (
			<>
				<div className="mx-4">
					<div className="card_cust p-5">
						<div className="d-flex align-items-center mb-3">
							<h2>Blotter Module</h2>
							<div className="col-xl-3 d-flex justify-content-end align-items-center ms-auto">
								<i className="fas fa-search fa-lg"></i>
								<div className="col-xl-8 col-12 ms-2">
									<input
										className="form-control"
										type="text"
										id="example-number-input"
										name="search"
										placeholder="Search"
									/>
								</div>
							</div>
						</div>

						<div className="table-responsive">
							<table
								className="table table-striped align-middle"
								style={{ textAlign: 'center' }}
							>
								<thead>
									<tr>
										<th className="text-center">ID</th>
										<th className="text-center">Incident's Place</th>
										<th className="text-center">Report's Date and Time</th>
										<th className="text-center">Incident's Date and Time</th>
										<th className="text-center">Status</th>
										<th className="text-center">Fact on Actual Crime</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="align-middle">Blotter.id</td>
										<td className="align-middle">Blotter.Incident's Place</td>
										<td className="align-middle">
											Blotter.Report's Date and Time
										</td>
										<td className="align-middle">
											Blotter.Incident's Date and Time
										</td>
										<td className="align-middle">Blotter.Status</td>
										<td className="align-middle">
											Blotter.Fact on Actual Crime
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div>
							<div class="row g-2">
								<div class="col-md">
									<div className="form-floating mb-3">
										<input
											type="text"
											className="form-control"
											name="incidents_place"
											id="incidents_place"
											placeholder="Incident's Place"
										/>
										<label for="incidents_place" className="text-secondary">
											Incident's Place
										</label>
									</div>
								</div>
								<div class="col-md">
									<input
										class="form-control"
										type="datetime-local"
										value="2011-08-19T13:45:00"
										id="incident-date-and-time"
									/>
									<label
										for="incident-date-and-time"
										className="text-secondary"
									>
										Date and time
									</label>
								</div>
								<div class="col-md">
									<div className="form-floating mb-3">
										<textarea
											className="form-control"
											name="Fact On Actual Crime"
											placeholder="fact_on_actual_crime"
											style={{ height: '100px' }}
										></textarea>
										<label
											for="fact_on_actual_crime"
											className="text-secondary"
										>
											Fact On Actual Crime
										</label>
									</div>
								</div>
								<div className="col-md">
									<label for="status" className="col-form-label">
										Select status
									</label>
									<select name="status" className="form-select">
										<option className="text-dark">Resolve</option>
										<option className="text-dark">Ongoing</option>
									</select>
								</div>
								<button type="submit" className="btn btn-primary">
									Add Blotter
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-4 mt-4 card_cust p-5">
					<div>
						<ul className="nav nav-tabs" id="myTab" role="tablist">
							<li className="nav-item">
								<a
									className="nav-link active"
									id="complainant-tab"
									data-bs-toggle="tab"
									data-bs-target="#complainant"
									type="button"
									role="tab"
									aria-controls="complainant"
									aria-selected="true"
								>
									<i class="far fa-users"></i> {'  '}
									Complainant
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									id="respondent-tab"
									data-bs-toggle="tab"
									data-bs-target="#respondent"
									type="button"
									role="tab"
									aria-controls="respondent"
									aria-selected="false"
								>
									<i class="fal fa-users"></i>
									{'  '}
									Respondent
								</a>
							</li>
						</ul>
					</div>
					<div className="p-0 tab-content" id="myTabContent">
						<div
							class="tab-pane fade show active"
							id="complainant"
							role="tabpanel"
							aria-labelledby="complainant-tab"
						>
							<div className="d-flex align-items-center mb-3">
								<h2>Complainant</h2>
								<div className="col-xl-3 d-flex justify-content-end align-items-center ms-auto">
									<i className="fas fa-search fa-lg"></i>
									<div className="col-xl-8 col-12 ms-2">
										<input
											className="form-control"
											type="text"
											id="example-number-input"
											name="search"
											placeholder="Search"
										/>
									</div>
								</div>
							</div>

							<div className="table-responsive">
								<table
									className="table table-striped align-middle"
									style={{ textAlign: 'center' }}
								>
									<thead>
										<tr>
											<th className="text-center">ID</th>
											<th className="text-center">First Name</th>
											<th className="text-center">Last Name</th>
											<th className="text-center">Middle Name</th>
											<th className="text-center">Phone Number</th>
											<th className="text-center">Address</th>
											<th className="text-center">Age</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="align-middle">Complainant.id</td>
											<td className="align-middle">Complainant.FirstName</td>
											<td className="align-middle">Complainant.LastName</td>
											<td className="align-middle">Complainant.Middle</td>
											<td className="align-middle">Complainant.PhoneNumber</td>
											<td className="align-middle">Complainant.Address</td>
											<td className="align-middle">Complainant.Age</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div>
								<div class="row g-2">
									<div class="col-md">
										<div className="form-floating mb-3">
											<input
												type="text"
												className="form-control"
												name="first_name"
												id="first_name"
												placeholder="First Name"
											/>
											<label for="first_name" className="text-secondary">
												First Name
											</label>
										</div>
									</div>
									<div class="col-md">
										<div className="form-floating mb-3">
											<input
												type="text"
												className="form-control"
												name="last_name"
												id="last_name"
												placeholder="Last Name"
											/>
											<label for="last_name" className="text-secondary">
												Last Name
											</label>
										</div>
									</div>
									<div class="col-md">
										<div className="form-floating mb-3">
											<input
												type="text"
												className="form-control"
												name="middle_name"
												id="middle_name"
												placeholder="Middle Name"
											/>
											<label for="middle_name" className="text-secondary">
												Middle Name
											</label>
										</div>
									</div>
									<div class="col-md">
										<div className="form-floating mb-3">
											<input
												type="text"
												className="form-control"
												name="address"
												id="address"
												placeholder="Address"
											/>
											<label for="address" className="text-secondary">
												Address
											</label>
										</div>
									</div>
									<div class="col-md">
										<div className="form-floating mb-3">
											<input
												type="number"
												className="form-control"
												name="age"
												placeholder="Age"
											/>
											<label for="age" className="text-secondary">
												Age
											</label>
										</div>
									</div>
									<button type="submit" className="btn btn-primary">
										Add Complainant
									</button>
								</div>
							</div>
						</div>
						<div
							class="tab-pane fade"
							id="respondent"
							role="tabpanel"
							aria-labelledby="respondent-tab"
						>
							<div className="d-flex align-items-center mb-3">
								<h2>Respondent</h2>
								<div className="col-xl-3 d-flex justify-content-end align-items-center ms-auto">
									<i className="fas fa-search fa-lg"></i>
									<div className="col-xl-8 col-12 ms-2">
										<input
											className="form-control"
											type="text"
											id="example-number-input"
											name="search"
											placeholder="Search"
										/>
									</div>
								</div>
							</div>

							<div className="table-responsive">
								<table
									className="table table-striped align-middle"
									style={{ textAlign: 'center' }}
								>
									<thead>
										<tr>
											<th className="text-center">ID</th>
											<th className="text-center">First Name</th>
											<th className="text-center">Last Name</th>
											<th className="text-center">Middle Name</th>
											<th className="text-center">Phone Number</th>
											<th className="text-center">Address</th>
											<th className="text-center">Age</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="align-middle">Respondent.id</td>
											<td className="align-middle">Respondent.FirstName</td>
											<td className="align-middle">Respondent.LastName</td>
											<td className="align-middle">Respondent.Middle</td>
											<td className="align-middle">Respondent.PhoneNumber</td>
											<td className="align-middle">Respondent.Address</td>
											<td className="align-middle">Respondent.Age</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div>
								<div class="row g-2">
									<div class="col-md">
										<div className="form-floating mb-3">
											<input
												type="text"
												className="form-control"
												name="first_name"
												id="first_name"
												placeholder="First Name"
											/>
											<label for="first_name" className="text-secondary">
												First Name
											</label>
										</div>
									</div>
									<div class="col-md">
										<div className="form-floating mb-3">
											<input
												type="text"
												className="form-control"
												name="last_name"
												id="last_name"
												placeholder="Last Name"
											/>
											<label for="last_name" className="text-secondary">
												Last Name
											</label>
										</div>
									</div>
									<div class="col-md">
										<div className="form-floating mb-3">
											<input
												type="text"
												className="form-control"
												name="middle_name"
												id="middle_name"
												placeholder="Middle Name"
											/>
											<label for="middle_name" className="text-secondary">
												Middle Name
											</label>
										</div>
									</div>
									<div class="col-md">
										<div className="form-floating mb-3">
											<input
												type="text"
												className="form-control"
												name="address"
												id="address"
												placeholder="Address"
											/>
											<label for="address" className="text-secondary">
												Address
											</label>
										</div>
									</div>
									<div class="col-md">
										<div className="form-floating mb-3">
											<input
												type="number"
												className="form-control"
												name="age"
												placeholder="Age"
											/>
											<label for="age" className="text-secondary">
												Age
											</label>
										</div>
									</div>
									<button type="submit" className="btn btn-primary">
										Add Respondent
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default BlotterModule;
