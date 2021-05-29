import { Component } from 'react';
import { Link } from 'react-router-dom';
class Login extends Component {
	render() {
		return (
			<>
				<div className="m-auto col-8 mt-3 d-flex flex-row">
					<div className="card card-body card_cust bg-secondary d-flex flex-column justify-content-center">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Sangguniang_Kabataan_logo.svg/1200px-Sangguniang_Kabataan_logo.svg.png"
							class="img-fluid"
							alt="..."
							className="mx-auto mt-0"
							style={{ height: '180px', width: '180px' }}
						/>
						<div>
							<h2 className="text-center text-white my-1">
								Baranggay Kapasigan
							</h2>
							<p className="text-center text-white my-1">
								A. Mabini Street, Barangay Kapasigan, Pasig City, 1600 Metro
								Manila
							</p>
						</div>
					</div>
					<form className="card card-body card_cust">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Sangguniang_Kabataan_logo.svg/1200px-Sangguniang_Kabataan_logo.svg.png"
							class="img-fluid"
							alt="..."
							className="mx-auto mt-0"
							style={{ height: '120px', width: '120px' }}
						/>
						<h2 className="text-center text-secondary my-5">
							Authorized Person Only!
						</h2>
						<div className="form-floating mb-3">
							<input
								type="text"
								className="form-control"
								name="username"
								placeholder="Username"
							/>
							<label for="username" className="text-secondary">
								Username
							</label>
						</div>
						<div class="form-floating mb-3">
							<input
								type="password"
								class="form-control"
								name="password"
								placeholder="Password"
							/>
							<label for="password" className="text-secondary">
								Password
							</label>
						</div>
						<div class="mb-3">
							<label for="exampleInputPassword1" className="form-label">
								Don't have an account?{' '}
								<Link className="text-primary" to="/register">
									Register
								</Link>
							</label>
						</div>
						<button type="submit" type="submit" className="btn btn-secondary">
							Login
						</button>
					</form>
				</div>
			</>
		);
	}
}
export default Login;
