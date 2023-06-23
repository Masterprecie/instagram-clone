import React, { useState } from 'react'
import './Signup.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("")
	const [username, setUsername] = useState("")

	const navigate = useNavigate()

	const handleSignUp = (e) => {
		e.preventDefault()
		createUserWithEmailAndPassword(auth, email, password)
			.then((authUser) => {
				signInWithEmailAndPassword(auth, email, password)
					.then(updateProfile(auth.currentUser,
						{
							displayName: username,
						})
					)
				navigate("/")
			})
			.catch((err) => {
				alert(err)
			})
	}
	return (
		<div className='signup'>
			<img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt=""
			/>

			<div className='signup__text'>
				<p>
					Sign up to see photos and videos from your friends.
				</p>
			</div>

			<button style={{ marginBottom: '20px' }}> <FacebookIcon /> <span style={{ marginLeft: '5px' }}>Log in with Facebook</span> </button>
			<input
				onChange={(e) => setEmail(e.target.value)}
				type="text"
				placeholder='Mobile Number or Email'
				value={email}
			/>
			<input
				onChange={(e) => setFullName(e.target.value)}
				type="text"
				placeholder='Full Name'
				value={fullName}
			/>
			<input
				onChange={(e) => setUsername(e.target.value)}
				type="text"
				placeholder='Username'
				value={username}
			/>
			<input
				onChange={(e) => setPassword(e.target.value)}
				type="text"
				placeholder='Password'
				value={password}
			/>

			<div className='policy'>
				<p>People who use our service may have uploaded your contact information to instagram. <span>Learn More</span></p>

				<p>By signing up, you agree to our <span>Terms, </span> <span>Privacy Policy</span> and <span>Cookies Policy.</span> </p>
			</div>
			<button onClick={handleSignUp}>Sign Up</button>
			<div className='auth__more'>
				<span>

					Already have an account? {" "}
					<Link to='/'> <span style={{ color: ' #0095f6' }}

					>Log In</span></Link>

				</span>
			</div>


		</div>
	)
}

export default Signup