import {createBrowserRouter} from 'react-router-dom'
import Main from '../Layout/Main'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Home from '../Pages/Home/Home'
import LogIn from '../Pages/LogIn/LogIn'
import Profile from '../Pages/Profile/Profile'
import Register from '../Pages/Register/Register'
const router = createBrowserRouter([{
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: "/", 
            element: <Home></Home>
        },
        {
            path: "/login", 
            element: <LogIn></LogIn>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: 'profile',
            element: <Profile></Profile>
        }
    ]
}])

export default router;