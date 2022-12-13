import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {id,name} = category;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full mt-4 ml-12 md:grid-cols-2 lg:grid-cols-1 grid-cols-2">
        <figure><img src="https://placeimg.com/400/225/arch" alt="pic" /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{id}</h2>
          <p className='text-2xl font-bold'>{name}</p>
          <button className="btn btn-block btn-glass bg-secondary">
          <Link to={`/category/${category.id}`}>Course Details</Link>
          </button>
        </div>
      </div>
    );
};

export default Category;