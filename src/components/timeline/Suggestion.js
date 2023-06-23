import React from 'react'
import './Suggestion.css'
import { Avatar } from '@mui/material'
import Profile from '../profile/Profile'

const Suggestion = () => {
	return (
		<div className='suggestions'>
			<Profile />
			<div className='suggestions__title'>
				<div >
					Suggested for you
				</div>
				<div>
					<span style={{ marginRight: '10px', color: '#fff' }}>See All</span>
				</div>
			</div>

			{/* First Suggestion */}
			<div className="suggestions__username">
				<div className='username__left'>
					<span className='username__left'>
						<Avatar>R</Avatar>
					</span>
					<div className='username__info'>
						<span className='username'>rick</span>
						<span className='relation'>Followed by marvel222</span>
					</div>
				</div>
				<button className='follow__button' >Follow</button>
			</div>

			{/* Second Suggestion */}
			<div className="suggestions__username">
				<div className='username__left'>
					<span className='username__left'>
						<Avatar>J</Avatar>
					</span>
					<div className='username__info'>
						<span className='username'>jane</span>
						<span className='relation'>Suggested for you</span>


					</div>
				</div>
				<button className='follow__button' >Follow</button>
			</div>

			{/* Third Suggestion */}

			<div className="suggestions__username">
				<div className='username__left'>
					<span className='username__left'>
						<Avatar>M</Avatar>
					</span>
					<div className='username__info'>
						<span className='username'>miracle</span>
						<span className='relation'>New to Instagram</span>
					</div>
				</div>
				<button className='follow__button' >Follow</button>
			</div>
			{/* Fourth Suggestion */}
			<div className="suggestions__username">
				<div className='username__left'>
					<span className='username__left'>
						<Avatar>P</Avatar>
					</span>
					<div className='username__info'>
						<span className='username'>presh</span>
						<span className='relation'>New to Instagram</span>
					</div>
				</div>
				<button className='follow__button' >Follow</button>
			</div>

			<p className='copyright'>About • Help • Press • API • Jobs • PrivacyTerms • Locations • Language •
				English <br />
				Meta Verified
				© 2023 INSTAGRAM FROM META</p>
		</div>
	)
}

export default Suggestion