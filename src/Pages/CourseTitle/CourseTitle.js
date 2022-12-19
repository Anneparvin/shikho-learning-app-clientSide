import { useEffect } from 'react';

const CourseTitle = title => {
    useEffect(()=>{
        document.title = `${title}-Shikho-learning-app`;
   },[title])
};

export default CourseTitle;