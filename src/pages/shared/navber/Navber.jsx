
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/logo_black.png'

import avatar from '../../../../public/Default pic.jpg'
import { useEffect, useState } from 'react';


const Navber = () => {


    const NavLinks = <

        >
        <NavLink to={'/'} style={({ isActive }) => {

            return {

                fontWeight: isActive ? "bold " : "",
                margin: isActive ? "2px" : "",
                fontSize: isActive ? "20px" : "",
                color: isActive ? "green" : "black",

                border: isActive ? "1px solid green " : "",
                cursor: isActive ? "pointer" : "pointer"




            }
        }}> <li><a>Home</a></li></NavLink>



        <NavLink to={'/allArtAndCraft'} style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold " : "",
                margin: isActive ? "2px" : "",
                fontSize: isActive ? "20px" : "",
                color: isActive ? "green" : "black",
                background: isActive ? "" : "",
                border: isActive ? "1px solid green " : "",
                cursor: isActive ? "pointer" : "pointer"





            }
        }}> <li><a>All Art & craft Items</a></li></NavLink>


        <NavLink to={'/addCraftItems'} style={({ isActive }) => {
            return {

                fontWeight: isActive ? "bold " : "",
                margin: isActive ? "2px" : "",
                fontSize: isActive ? "20px" : "",
                color: isActive ? "green" : "black",
                background: isActive ? "" : "",
                border: isActive ? "1px solid green " : "",
                cursor: isActive ? "pointer" : "pointer"




            }
        }}> <li><a> Add Craft Item</a></li></NavLink>


        <NavLink to={'/myArtAndCraft'} style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold " : "",
                margin: isActive ? "2px" : "",
                fontSize: isActive ? "20px" : "",
                color: isActive ? "green" : "black",
                background: isActive ? "" : "",
                border: isActive ? "1px solid green " : "",
                cursor: isActive ? "pointer" : "pointer"





            }
        }}> <li><a>My Art&Craft List</a></li></NavLink>







    </>

    const [theme, setTheme] = useState('light');

    console.log(theme);
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme]);

    const toggleTheme = (e) => {
        if (e.target.checked) {
            setTheme('synthwave');
        } else {
            setTheme('light');
        }
    };

    return (
        <div className=''>
            <div className="navbar bg-base-100 max-w-7xl mx-auto shadow-lg px-4  fixed  top-0  z-10 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <img className='w-40' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <label className="cursor-pointer grid place-items-center">
                    <input
                        onChange={toggleTheme}
                        type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                <div className="navbar-end ">
                    <div className="avatar">
                        <div className="w-14 rounded-full mr-4 ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={avatar} />
                        </div>
                    </div>
                    <Link to={'/login'}><button className='btn btn-ghost'>Log in</button></Link>
                </div>
            </div>

        </div>


    );
};

export default Navber;