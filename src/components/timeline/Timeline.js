import React, { useState } from 'react'
import './Timeline.css'
import Suggestion from './Suggestion'
import Post from './Post'
import Stories from './Stories'
import './Stories.css'
const Timeline = () => {

	const [posts, setPosts] = useState([
		{
			user: "mike",
			postImage:
				"https://media.istockphoto.com/id/1129845783/photo/lagos-nigeria-lekki-ikoyi-bridge-lagos-landmark-infrastructure-and-urban-transportation.jpg?s=612x612&w=0&k=20&c=feTQNjRA0-tAuekoOo6Wr3N71gomagul1vGLB9dMxgE=",
			likes: 54,
			timestamp: "2d",
		},
		{
			user: "john",
			postImage:
				"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
			likes: 432,
			timestamp: "2d",
		},
		{
			user: "marvel",
			postImage:
				"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
			likes: 140,
			timestamp: "2d",
		},
		{
			user: "tim",
			postImage:
				"https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png",
			likes: 14,
			timestamp: "2d",
		},
	])


	return (
		<div className='timeline'>
			<div className="timeline__left">
				<div className='carousel-status'>
					<Stories />
				</div>
				<div className="timeline__post">
					{posts.map((post) => (
						<Post
							user={post.user}
							postImage={post.postImage}
							likes={post.likes}
							timestamp={post.timestamp}
						/>
					))}
				</div>
			</div>
			<div className='timeline__right'>
				<Suggestion />
			</div>
		</div>
	)
}

export default Timeline