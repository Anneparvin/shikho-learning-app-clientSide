
import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from '../Pages/Category/Category';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';


const Main = () => {
    return (
        <div>
                <Header></Header>
                <Category></Category>
                <Outlet></Outlet>
                <Footer></Footer>
            
        </div>
    );
};

export default Main;