import React from 'react';
import {useLoaderData} from 'react-router-dom';
import CoursesDetail from '../CoursesDetail/CoursesDetail';
import CourseTitle from '../CourseTitle/CourseTitle';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';


const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    
    CourseTitle('Courses');

    return (
        <div>
            <h2 className='text-4xl text-center font-bold'>This is Category</h2>
             <LeftSideNav></LeftSideNav> 
       </div>  
    );
};

export default Courses;