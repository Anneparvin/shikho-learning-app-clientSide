import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";

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
                path:'/blog',
                element:<Blog></Blog>,  
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>,  
            }
        ]
    }
])