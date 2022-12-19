import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesDetail from '../CoursesDetail/CoursesDetail';

const Course = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2>you have :{courses.length}</h2>
                {
                courses.map(course =><CoursesDetail
                key={course.category_id}
                course={course}
                ></CoursesDetail>)
                }
            
        </div>
    );
};

export default Course;