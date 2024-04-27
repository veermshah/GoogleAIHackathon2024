import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const preventRefresh = (e) => {
	e.preventDefault();
};

export default function Login() {
	return (
		<div className="wrapper signIn">
			<div className="form">
				<div className="heading">LOGIN</div>
				<form>
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" placeholder="Enter your name" />
					</div>
					<div>
						<label htmlFor="e-mail">E-Mail</label>
						<input type="email" id="e-mail" placeholder="Enter you mail" />
					</div>
                    <Link to="/Home">
                        <button type="submit">
                            Submit
                        </button>
                    </Link>
				</form>
				<p>
					Don't have an account ? <Link to="/Signup"> Sign In </Link>
				</p>
			</div>
		</div>
	);
}