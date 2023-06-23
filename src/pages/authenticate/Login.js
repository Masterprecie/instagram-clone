/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './Login.css'
import './Authenticate.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { Link, useNavigate } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()

	const handleLogin = (e) => {
		e.preventDefault()
		signInWithEmailAndPassword(auth, email, password)
		navigate('/')
	}

	return (
		<div className='authenticate'>
			<div className='auth__left'>
				<img src="https://i.imgur.com/P3Vm1Kq.png" alt="Instagram Screenshots"
				/>
			</div>
			<div className='auth__right'>
				<div className='login'>
					<img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt=""
					/>
					<input
						onChange={(e) => setEmail(e.target.value)}
						type="text"
						placeholder='Phone number, username, or email'
					/>
					<input
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder='Password'
					/>
					<button onClick={handleLogin}>
						Log In
					</button>

					<div className='login__facebook'>
						<a href="#" > <FacebookIcon /> <span style={{ marginLeft: '5px' }}> Log in with Facebook</span>
						</a>
						<p>Forget password?</p>
					</div>
				</div>



				<div className='auth__more'>
					<span>

						Don't have an account? {" "}
						<Link to='/signup'> <span style={{ color: '#0095f6' }}

						>Sign Up</span></Link>

					</span>
				</div>
			</div>

		</div>
	)
}

export default Login