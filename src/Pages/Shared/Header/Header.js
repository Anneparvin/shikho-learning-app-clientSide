import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Assets/shikhoApp.png';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    //User Log Out
    const handleLogOut = () =>{
        logOut()
        .then(() => console.log('User Logged Out'))
        .catch(error => console.error(error.message))
    };

    const menuItems = <>
                    <li>
                        <NavLink to='/home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/courses'>Courses</NavLink>
                    </li>
                    <li>
                        <NavLink to='/faq'>FAQ</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog'>Blog</NavLink>
                    </li>
                    </>

   

    
    return (
        <div>
            <div className="navbar bg-black text-white p-16 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box text-black w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className='w-16 h-16 rounded-lg' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="dropdown dropdown-end">
                        <Link to='/profile'>
                        <div className="w-10 rounded-full mx-2 hover:tooltip hover:tooltip-open hover:tooltip-bottom" data-tip={user?.displayName || 'User Name'}>
                            <img className="h-10 rounded-full" src={user?.photoURL ? user.photoURL : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt='dp' />
                        </div>
                        </Link>
                        </div>
                        {
                        user?.uid ? <Link><button onClick={handleLogOut} className='btn btn-sm'>LogOut</button></Link> : <div className="btn-group">
                            <Link className='btn btn-sm btn-active' to='/login'>Login</Link> <Link className='btn btn-sm' to='/register'>Register</Link>
                        </div>
                        }
                </div>
            </div>
            
        
    );
};

export default Header;