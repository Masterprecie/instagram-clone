import React from 'react'

const Avatar = ({ image }) => {
	return (
		<div className='avatar-detail'>
			<div className='avatar-box'>
				<div class="avatar-profile-image" >
					<img src={image.stimg} alt="" />
				</div>

			</div>
			<p className='avatar-name'>{image.name}</p>

		</div>
	)
}

export default Avatar