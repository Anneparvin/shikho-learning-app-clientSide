import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Course from "../../Pages/Course/Course";
import Courses from "../../Pages/Courses/Courses";
import CoursesDetail from "../../Pages/CoursesDetail/CoursesDetail";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Profile from "../../Pages/Login/Profile/Profile";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,  
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://shikho-learning-app-server.vercel.app/courses`)
            },
            {
                path:'/course',
                element:<Course></Course>,  
            },
            {
                path:'/home',
                element:<Home></Home>,  
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`https://shikho-learning-app-server.vercel.app/category/${params.id}`)  
            },
            {
                path:'/courses/:id',
                element:<Courses></Courses>,
                loader: ({params}) => fetch(`https://shikho-learning-app-server.vercel.app/courses/${params.id}`)  
            },
            {
                path:'/login',
                element:<Login></Login>,  
            },
            {
                path:'/register',
                element:<Register></Register>,  
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:'/blog',
                element:<Blog></Blog>,  
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>,  
            },
            {
                path:'/coursesDetail',
                element:<CoursesDetail></CoursesDetail>,  
            },
            {
                path:'/checkOut',
                element:<CheckOut></CheckOut>,
                loader: ({params}) => fetch(`https://shikho-learning-app-server.vercel.app/courses/${params.id}`)    
            },
        ]
    },
    {
        path:'*',
        element:<div className='w-9/12 mx-auto h-96'><img src='https://img.freepik.com/ree-vector/error-404-concept-illustration_114360-1811.jpg?w=2000' alt='404'/></div>
    }
]);