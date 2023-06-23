/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Profile.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'

const Profile = () => {
	const user = useSelector((state) => state.data.user.user)
	return (
		<div className='profile'>
			<div className='inner__profile'>
				<div>
					<Avatar>
						{user.username ? user.username.charAt(0).toUpperCase() : "A"}
					</Avatar>
				</div>

				<div>
					<p>	{user.username}{" "}</p>
					<p>Ikpa Precious</p>
				</div>
			</div>


			<div style={{ marginRight: '10px' }}>
				<a href="#" >Switch</a>
			</div>


		</div>
	)
}

export default Profile