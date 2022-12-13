import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {id,name} = category;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src="https://placeimg.com/400/225/arch" alt="pic" /></figure>
        <div className="card-body">
          <h2 className="card-title">{id}</h2>
          <p>{name}</p>
          <div className="card-actions justify-end">
          <Link to={`/category/${category.id}`}>{category.name}</Link>
          </div>
        </div>
      </div>
    );
};

export default Category;