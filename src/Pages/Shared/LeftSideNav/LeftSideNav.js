import React, { useEffect, useState } from 'react';
import Category from '../../Category/Category';


const LeftSideNav = () => {
    const [categories, setCategories] = useState();

    useEffect(()=>{
        fetch ('http://localhost:5000/courses-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div>
            <h2>All Category:{categories.length}</h2>
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