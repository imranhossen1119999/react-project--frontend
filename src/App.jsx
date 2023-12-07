import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import LeftBar from './component/leftBar/LeftBar.jsx';
import RightBar from './component/rightBar/RightBar.jsx';
import Navbar from './component/navBar/Navbar.jsx'
import Home from './pages/home/Home.jsx';
import Profile from './pages/profile/Profile.jsx';
import {
  createBrowserRouter,
  RouterProvider,Route
} from "react-router-dom";
import './style.scss'
import { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext.jsx';
import { AuthContext } from './context/authContext.jsx';


function App () {

  const {currentUser}= useContext(AuthContext);

  const {darkMode}=useContext(DarkModeContext);
  console.log(darkMode)


  const Layout =()=>{
    return(
      <div className={`theme- ${darkMode ? "dark" : "light"}`}>
          <Navbar/>
          <div style={{display:"flex"}}>
            <LeftBar/>
            <div style={{flex:6}}><Home/></div>
            
            <RightBar/>
            
          </div>
      </div>
    );
  };

const ProtectedRoute=({children})=>{
  if(!currentUser){
    return <Navigate to="/login"/>;
  }
  return children;
}
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout/></ProtectedRoute>,
      children:[
        {
          path: "/",
          element: <Home/>,
        }
      ]
    },
    {
      path: "/profile/:id",
      element: <Profile/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

    return(
      <div>
          <RouterProvider router={router} />
      </div>
    );
  };
 
 


export default App;