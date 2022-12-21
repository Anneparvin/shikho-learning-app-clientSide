import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseTitle from '../CourseTitle/CourseTitle';
import CoursesDetail from '../CoursesDetail/CoursesDetail';

const Category = () => {
  const courses = useLoaderData();
  console.log(courses);
    CourseTitle('Courses');
    
    return (
     <div>
            <h1 className='text-4xl text-center font-bold'>This is category:{courses.length}</h1>
            {
                courses.map(course =><CoursesDetail
                key={course._id}
                course={course}
                ></CoursesDetail>)
            }
        </div>
    );
};

export default Category;