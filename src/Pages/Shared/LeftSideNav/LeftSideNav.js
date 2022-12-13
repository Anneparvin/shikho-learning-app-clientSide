import React, { useEffect, useState } from 'react';
import Category from '../../Category/Category';


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch ('https://shikho-learning-app-server.vercel.app/courses-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h2 className='text-2xl ml-12 font-bold'>All Category:{categories.length}</h2>
            {
                categories.map(category =><Category
                key={category.id}
                category={category}
                ></Category>)
            }
    </div>
    );
};

export default LeftSideNav;