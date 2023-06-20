import React from 'react'
import './Stories.css'
import Avatar from './Avatar'
import { StoryData } from './StoriesData'
import left from '../../assets/angle-left-solid.svg'
import right from '../../assets/angle-right-solid.svg'
const Stories = () => {
	const handleSlide = (direction) => {
		const slider = document.getElementsByClassName('carousel-body')[0];
		if (direction === "left")
			slider.scrollBy(-400, 0);
		else
			slider.scrollBy(400, 0);
	}

	return (
		<div className='check'>
			<div className='arrow-btn left-icon' onClick={() => handleSlide('left')}>
				<img src={left} alt="left-angle" />
			</div>
			<div className='arrow-btn right-icon' onClick={() => handleSlide('right')} >
				<img src={right} alt="left-angle" />
			</div>
			<div className='carousel-body'>
				{
					StoryData.map((item) => {
						return <Avatar key={item} image={item} />
					})
				}

			</div>
		</div>
	)
}

export default Stories