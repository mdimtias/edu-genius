import {createBrowserRouter} from 'react-router-dom'
import Main from '../Layout/Main'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Home from '../Pages/Home/Home'
import LogIn from '../Pages/LogIn/LogIn'
import Register from '../Pages/Register/Register'
import Profile from '../Pages/Profile/Profile'
import ServiceDetail from '../Pages/ServiceDetail/ServiceDetail'
import Services from '../Pages/Services/Services'
import AllReview from '../Pages/AllReview/AllReview'
import AddService from '../Pages/AddService/AddService'
import PrivateRoute from './PrivateRoute'
import AddCategory from '../Pages/AddCategory/AddCategory'
import AddReview from '../Pages/AddReview/AddReview'
import MyReview from '../Pages/MyReview/MyReview'
import AllBlog from '../Pages/AllBlog/AllBlog'
import BlogDetail from '../Pages/BlogDetail/BlogDetail'
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
            path: '/blog',
            element: <AllBlog></AllBlog>
        },
        {
            path: '/blog/:title',
            element: <BlogDetail></BlogDetail>,
            loader: ({params})=>fetch(`https://assignment-10-server-iota.vercel.app/blogs/${params.title}`)
        },
        {
            path: '/profile',
            element: <Profile></Profile>
        },
        {
            path: '/services',
            element: <Services></Services>
        },
        {
            path: '/add-service',
            element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
            path: 'service/:name',
            element: <ServiceDetail name={(params)=>params}></ServiceDetail>,
            loader: ({params})=>fetch(`https://assignment-10-server-iota.vercel.app/service-name/${params.name}`)
            
        },
        {
            path: '/add-category',
            element: <PrivateRoute><AddCategory></AddCategory></PrivateRoute>
        },
        {
            path: '/review',
            element: <AllReview></AllReview>
        },
        {
            path: '/my-review',
            element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
        },

        {
            path: '/add-review',
            element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
        }


    ]
}])

export default router;