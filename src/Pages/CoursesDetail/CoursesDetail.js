import React, { useContext } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Pdf from "react-to-pdf";
import { AuthContext } from '../../contexts/AuthProvider';
import CourseTitle from '../CourseTitle/CourseTitle';

// const ref = React.createRef();
// console.log(ref);

const CoursesDetail = ({course}) => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    console.log(course);

    const handleProfile = () =>{
        navigate('/profile');
    }
    
     const {_id, title,mentor, details,image_url,rating, total_view,thumbnail_url} = course;
    
    CourseTitle('CoursesDetail');
    

    return (
        <div>
         <Pdf filename={`${_id}.pdf`}>
            {({toPdf, targetRef: ref}) =>  (
            <div className="bg-base-200 p-6" ref={ref}>
             {/* card contents */}
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
            <div className='d-flex'>
            <image
                rounded circle
                className='me-2'
                src ={mentor.img}
                style ={{height:'60px'}}
            ></image>
            <div>
                <p className='mb-0'>{mentor?.name}</p>
                <p>{mentor?.published_date}</p>
            </div>
        </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{total_view}</p>
                <p>{image_url}</p>
                <p>{thumbnail_url}</p>
                <p>
                {
            details.length > 250?
            <p>{details.slice(0,250)+ '...'}<Link to={`/courses/${_id}`}>Read More...</Link></p>:<p>{details}</p>
          }
                </p>
                <p>{total_view}</p>
                <div className="card-actions justify-end">
                    <footer>
                    <div>
            <span>{rating?.number}</span>
          </div>
          <div>
            <span>{total_view}</span>
          </div>
                    </footer>
                    <Link to={`/checkout/${_id}`}><button className='btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black mx-2'>Premium Access</button></Link>
                            <button className='btn bg-gradient-to-r from-red-400 to-yellow-300 hover:from-blue-500 hover:to-violate-500 mx-2 text-black' onClick={toPdf}>Download PDF</button> 
                </div>
            </div>
            </div>  

                        
            </div>
            )}
                
        </Pdf>

        </div>
    );
};

export default CoursesDetail;