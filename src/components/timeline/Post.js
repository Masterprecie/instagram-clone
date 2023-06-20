import React from 'react'
import './Post.css'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from '@mui/material';

const Post = ({ user, postImage, likes, timestamp }) => {
	return (
		<div className='post'>
			<div className="post__header">
				<div className="post__headerAuthor">
					<Avatar style={{ marginRight: "10px" }}
					>  {user.charAt(0).toUpperCase()}
					</Avatar> {" "}
					{user} • <span style={{ paddingLeft: '5px' }}> {timestamp}</span>
				</div>
				<MoreHorizIcon />
			</div>
			<div className='post__image'>
				<img src={postImage} alt="postImage" />

			</div>
			<div className='post__footer'>
				<div className='post__footerIcons'>
					<div className="post__iconsMain">
						<FavoriteBorderIcon className="postIcon" />
						<ChatBubbleOutlineIcon className="postIcon" />
						<TelegramIcon className="postIcon" />
					</div>
					<div className='post__iconSave'>
						<BookmarkBorderIcon className="postIcon" />
					</div>
				</div>
				Liked by {likes} people
			</div>

		</div>
	)
}

export default Post