import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch ('https://shikho-learning-app-server.vercel.app/courses-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {
              categories.map(category => <p key={category.id}>
                <div className="card w-96 bg-base-100 shadow-xl image-full gap-6">  
                <figure><img src="https://placeimg.com/400/225/arch" alt="course" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold">{category.id}</h2>
                    <div className="card-actions justify-end">
                    <button className="btn btn-secondary btn-wide mt-12 mr-12 text-center font-bold p-12 mb-12">
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </button>
                    </div>
                </div>
                </div>
              </p>)  
            }
    </div>
    );
};

export default LeftSideNav;