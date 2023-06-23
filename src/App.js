/* eslint-disable react-hooks/exhaustive-deps */

import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Homepage from './pages/home/Homepage';
import { useEffect } from 'react';
import { auth } from './firebase';
import { loginUser, setLoading } from './features/userSlice';
import Login from './pages/authenticate/Login';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Signup from './pages/authenticate/Signup';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        )
        dispatch(setLoading(false))
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in")
      }
    })
  }, [])

  const user = useSelector((state) => state.data.user.user)

  console.log(user);
  const isLoading = useSelector((state) => state.data.user.isLoading)


  if (isLoading) {
    return <div class='loader-container'>
      <div class='loader'></div>
    </ div>;
  }

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path="/home"
          element={
            user ? (
              <Navigate to="/home" replace />
            ) : (
              <Outlet />
            )
          }
        />
        <Route path="/home" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </div>

  );
}

export default App;

// <div className="app">

//   {isLoading ? (
//     <div class='loader-container'>
//       <div class='loader'></div>
//     </ div>
//   ) : (
//     <>{user ?
//       (<Route path='/' element={< Homepage />} />
//       ) : (
//         <Route path='/login' element={<Login />} />
//       )}
//     </>

//   )}
// </div>
