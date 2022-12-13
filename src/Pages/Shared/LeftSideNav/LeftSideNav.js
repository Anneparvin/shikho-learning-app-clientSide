import React, { useEffect, useState } from 'react';

const LeftSideNav = () => {
    const [categories, setCategories] = useState();

    useEffect(()=>{
        fetch ('http://localhost:5000/courses-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h4>All Categories:{categories.length}</h4>
            {
                categories.map(category => <p
                key={category.id}>
                    
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;