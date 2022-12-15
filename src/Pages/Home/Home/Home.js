import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../Assets/shikhoImage1.jpg';


const Home = () => {
    return (
        <div>
        <img src={img} alt="" className="w-full mx-auto sm:h-80 lg:h-96 xl:h-112 2xl:h-128 mt-4 rounded-lg" />
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ml-96">
                    <h1 className="text-6xl font-bold leading-none sm:text-6xl">Shikho Learning App <br /> 
                        {/* <span className="dark:text-violet-400">Learning App</span><br /> */}
                        <span className='text-3xl'>Learn Without Limits</span>
                    </h1>
                    
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center mt-4">
                        <Link to='/courses'><button className='btn btn-primary btn-wide'><p>Courses <i className="fa-solid fa-tricycle"></i></p></button></Link>
                        <Link to='/register'><button className='btn btn-info btn-wide'><p>Register <i className="fa-solid fa-arrow-right-from-bracket"></i></p></button></Link>
                    </div>
        </div>
        </div>
        
    );
};

export default Home;