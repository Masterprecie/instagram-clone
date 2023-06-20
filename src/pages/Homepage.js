import React from 'react'
import './Homepage.css'
import Timeline from '../components/timeline/Timeline'
import Sidenav from '../components/navigation/Sidenav'



const Homepage = () => {
	return (
		<div className='homepage'>
			<div className='homepage__navWraper'>
				<Sidenav />
			</div>

			<div className='homepage__timeline'>
				<Timeline />
			</div>

		</div>
	)
}

export default Homepage