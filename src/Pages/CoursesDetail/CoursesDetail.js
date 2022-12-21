
import React from 'react';
import { Link} from 'react-router-dom';
import Pdf from "react-to-pdf";
import CourseTitle from '../CourseTitle/CourseTitle';


const ref = React.createRef();
 console.log(ref);

const CoursesDetail = ({course}) => {
    console.log(course);
    CourseTitle('CoursesDetail');
    
    const {_id, title,mentor, details,image_url,rating, total_view,thumbnail_url,fees,duration} = course;
    console.log(image_url);
    
    
    

    return (

        <Pdf filename={`${_id}.pdf`}>
            {({toPdf, targetRef: ref}) =>  (
            <div className="bg-base-200 p-6" ref={ref}>

                        {/* sideBar #2 */}
                        <div className='col-span-2 w-full p-6 sm:w-12/12 bg-gray-900 text-gray-100 rounded-xl'>
                       <div className='text-4xl my-6 font-bold'>{title}</div>
                            <h1>{image_url}</h1>
                                <div>
                                <h1 className='text-4xl font-bold'>Mentor</h1>
                                <p>Name: {mentor.name}</p>
                                <p>{mentor.img}</p>
                                <p>Published_date: {mentor.published_date}</p>
                                </div>
                                
                                <p>Total_view: {total_view}</p>
                                <p>Thumbnail_url: {thumbnail_url}</p>

                        
                            <div className="w-full my-6"> 
                                <div className="card border">
                                    <div className="card-body">
                                        <div className='card-title grid grid-cols-5 text-3xl lg:text-5xl'><h1><span className='text-yellow-400'><i className="fa-solid fa-star"></i></span> {rating.badge}{rating.number}</h1> 
                                        <div className="divider lg:divider-horizontal"></div>
                                        <h1><span className='text-white'><i className="fa-solid fa-clock text-yellow-400"></i></span>{duration}</h1>
                                        <div className="divider lg:divider-horizontal"></div>
                                        <h1><span><i className="fa-solid fa-dollar-sign text-yellow-400"></i></span>${fees}</h1>
                                        </div> 
                                    </div>
                                </div>
                            </div>

                            <Link to={`/checkOut/${_id}`}><button className='btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black mx-2'>Premium Access</button></Link>
                            <button className='btn bg-gradient-to-r from-red-400 to-yellow-300 hover:from-blue-500 hover:to-violate-500 mx-2 text-black' onClick={toPdf}>Download PDF</button>

                            <div className="card">
                                <div className="card-body items-center text-center">Details About : 
                                {
            details.length > 250?
            <p>{details.slice(0,250)+ '...'}<Link to={`/courses/${_id}`}>Read More...</Link></p>:<p>{details}</p>
          }
                                </div>
                            </div>
                            <p>
                            
                            </p>
                        </div>
                </div>
            )}
                
        </Pdf>
    );
};

export default CoursesDetail;