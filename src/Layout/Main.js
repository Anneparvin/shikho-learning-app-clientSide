
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';


const Main = () => {
    return (
        <div>
                <Header></Header>
                <LeftSideNav></LeftSideNav>
                <Outlet></Outlet>
                <Footer></Footer>
            
        </div>
    );
};

export default Main;