import { Link } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<>
			<nav id="sidebar">
				<div id="dismiss">
					<i className="fas fa-arrow-left fa-1x"></i>
				</div>
				<div className="sidebar-header">
					<h3>Brgy 168</h3>
					<strong>Online Blotter System</strong>
				</div>
				<ul className="list-unstyled components">
					<li className="ps-3">
						<Link to="/dashboard" class="dismiss">
							<i className="fas fa-chart-line"></i> Dashboard
						</Link>

						<Link to="/products" class="dismiss">
							<i class="fal fa-shield-alt"></i> Blotter
						</Link>

						<Link to="/reports" class="dismiss">
							<i class="fas fa-file-alt"></i> Reports
						</Link>

						<Link to="/products/setting" class="dismiss">
							<i class="far fa-cogs"></i> Blotter Setting
						</Link>

						<Link to="/inventories/setting" class="dismiss">
							<i class="fad fa-users-cog"></i> Respondent Setting
						</Link>

						<Link to="/accounts/setting" class="dismiss">
							<i class="fad fa-users-cog"></i> Complaiant Setting
						</Link>

						<Link to="/supplier" class="dismiss">
							<i class="fal fa-user-cog"></i> Employee Setting
						</Link>

						<Link to="/transactions" class="dismiss">
							<i class="fal fa-user-cog"></i> Admin Setting
						</Link>
					</li>
				</ul>
			</nav>
			<nav className="navbar navbar-expand-lg navbar-light bg-light mb-2 ">
				<div className="container-fluid">
					<button type="button" id="sidebarCollapse" className="navbar-btn">
						<i class="fal fa-bars fa-2x"></i>
					</button>

					<ul className="nav navbar-nav ms-auto">
						<>
							<li className="nav-item">
								<Link to="/login">
									<a className="nav-link">Logout</a>
								</Link>
							</li>
						</>

						<>
							<li className="nav-item">
								<Link to="/login" className="nav-link">
									Login
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/register" className="nav-link">
									Register
								</Link>
							</li>
						</>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
