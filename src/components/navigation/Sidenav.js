import React from 'react'
import './Sidenav.css'
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
//import SlideshowIcon from "@mui/icons-material/Slideshow";
//import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
//import { Avatar } from "@mui/material";
// import { AiFillHome, AiOutlineHeart, AiOutlineMenu } from 'react-icons/ai'
// import { GoSearch } from 'react-icons/go'
// import { MdOutlineExplore } from 'react-icons/md'
import { BiMoviePlay } from 'react-icons/bi'
// import { BsPlusCircle } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Sidenav = () => {
	const user = useSelector((state) => state.data.user.user)
	const dispatch = useDispatch();
	const navigate = useNavigate()

	const handleLogout = () => {
		dispatch(logoutUser())
		signOut(auth)
		navigate('/login')
	}
	return (
		<div className='sidenav'>
			<img
				className='sidenav__logo'
				src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="instagram logo"
			/>

			<div className='sidenav__buttons'>
				<button className='sidenav__button'>
					<HomeIcon />
					<span>Home</span>
				</button>
				<button className='sidenav__button'>
					<SearchIcon />
					<span>Search</span>
				</button>
				<button className='sidenav__button'>
					<ExploreIcon />
					<span>Explore</span>
				</button>
				<button className='sidenav__button'>
					<BiMoviePlay size={24} />
					<span>Reels</span>
				</button>
				<button className='sidenav__button'>
					<FiSend size={24} />
					<span>Messages</span>
				</button>
				<button className='sidenav__button'>
					<FavoriteBorderIcon />
					<span>Notifications</span>
				</button>
				<button className='sidenav__button'>
					<AddCircleOutlineIcon />
					<span>Create</span>
				</button>

				<button className='sidenav__button'>
					<Avatar>
						{user.username ? user.username.charAt(0).toUpperCase() : "A"}
					</Avatar>
					<span>

					</span>

					{user.username}{" "}
					<button onClick={handleLogout} className='logout__button'>Logout</button>

				</button>

				<div className="sidenav__more">
					<button className="sidenav__button">
						<MenuIcon />
						<span className="sidenav__buttonText">More</span>
					</button>
				</div>

			</div>

		</div>
	)
}

export default Sidenav