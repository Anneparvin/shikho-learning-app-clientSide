import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseTitle from '../CourseTitle/CourseTitle';
import CoursesDetail from '../CoursesDetail/CoursesDetail';

const Category = () => {
  const courses = useLoaderData();
    CourseTitle('Courses');
    
    return (
     <div>
            <h2>this is category:{courses.length}</h2>
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