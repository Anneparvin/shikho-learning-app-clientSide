import React, { useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import CourseTitle from '../CourseTitle/CourseTitle';
import LeftSideNav from '../../Pages/Shared/LeftSideNav/LeftSideNav';


const Courses = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    CourseTitle('Courses');

    const handleProfile = () =>{
        navigate('/profile');
    }

    return (
        <div>
             {/* sideBar #1 */}
             <div onClick={handleProfile} className="h-full px-6 space-y-2 w-full dark:bg-gray-900 dark:text-gray-100 mb-4">
                        <div className="flex items-center justify-center p-2 space-x-4  my-4 mx-auto border rounded-md">
                        <img src={user?.photoURL ? user.photoURL : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt="Pic" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                        <div>
                            <h2 className="text-lg font-semibold">{user?.displayName ? user.displayName : "Your Name"}</h2>
                                <span className="flex items-center space-x-1">
                                    <Link to='/profile' className="text-xs hover:underline dark:text-gray-400">View Profile</Link>
                                </span>
                            </div>
                        </div>  
                        <nav className="space-y-8 text-sm">
                                <div className="m-auto">
                                    <h2 className="text-xl mt-6 font-semibold tracking-widest uppercase text-gray-400">Course </h2>
                                    <div className="flex flex-col space-y-1 text-left">
                                        <ol className='list-decimal text-lg font-semibold mx-auto p-3'>
                                           <LeftSideNav></LeftSideNav>
            
                                        </ol>
                                    </div>
                                </div>
                            </nav>
                        </div> 
                        {/* pdf premium access */}
                        {/* <Link to={`/checkout/${category_id}`}><button className='btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black mx-2'>Premium Access</button></Link>
                            <button className='btn bg-gradient-to-r from-red-400 to-yellow-300 hover:from-blue-500 hover:to-violate-500 mx-2 text-black' onClick={toPdf}>Download PDF</button> */}

            
        </div>
    );
};

export default Courses;