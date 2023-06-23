import React from 'react'
import './Status.css'

import { StoryData } from './StatusData'


const Status = () => {
	const handleSlide = (direction) => {
		const slider = document.getElementsByClassName('carousel-body')[0];
		if (direction === "left")
			slider.scrollBy(-400, 0);
		else
			slider.scrollBy(400, 0);
	}
	return (
		// <div className='status__container'>
		// 	<div className='status'>
		// 		<div className='status__img'>
		// 			<img
		// 				src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1" alt="" />
		// 		</div>
		// 		<p>i_amprince</p>
		// 	</div>
		// 	<div className='status'>
		// 		<div className='status__img'>
		// 			<img
		// 				src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1" alt="" />
		// 		</div>
		// 		<p>i_amprince</p>
		// 	</div>
		// 	<div className='status'>
		// 		<div className='status__img'>
		// 			<img
		// 				src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1" alt="" />
		// 		</div>
		// 		<p>i_amprince</p>
		// 	</div>
		// 	<div className='status'>
		// 		<div className='status__img'>
		// 			<img
		// 				src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1" alt="" />
		// 		</div>
		// 		<p>i_amprince</p>
		// 	</div>
		// 	<div className='status'>
		// 		<div className='status__img'>
		// 			<img
		// 				src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1" alt="" />
		// 		</div>
		// 		<p>i_amprince</p>
		// 	</div>

		// </div>

		<div
			className='check'
			style={{ display: 'flex', justifyContent: 'space-between', overflowX: 'auto' }}
		>
			<div className='arrow-btn left-icon' onClick={() => handleSlide('left')}>
				<img src="./images/angle-left-solid.svg" alt="left-angle" />
			</div>
			<div className='arrow-btn right-icon' onClick={() => handleSlide('right')} >
				<img src="./images/angle-right-solid.svg" alt="left-angle" />
			</div>
			<div className="carousel-body">
				{StoryData.map((data, index) => {
					return (
						<div className='status' key={index} >
							<div className='status__img'>
								<img
									src={data.stimg}
									alt='dfdg'
								/>
							</div>

							<div
								style={{
									marginLeft: '15px',
									width: '44px',
									fontWeight: '400',
									fontSize: '10px',
									textAlign: 'center',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									whiteSpace: 'nowrap',
								}}
							>
								{data.name}
							</div>
						</div>
					);
				})}
			</div>

		</div>
	)
}

export default Status