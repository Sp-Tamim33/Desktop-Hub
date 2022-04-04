import React from 'react';
import CustomLink from '../CoustomLink/CoustomLink';

const Header = () => {
    return (
        <div>
            <nav className='py-4 bg-gray-300 flex justify-center'>
                <CustomLink className='p-5 text-xl font-semibold' to="/home">Home</CustomLink>
                <CustomLink className='p-5 text-xl font-semibold' to="/review">Review</CustomLink>
                <CustomLink className='p-5 text-xl font-semibold' to="/dashbord">Dashbord</CustomLink>
                <CustomLink className='p-5 text-xl font-semibold' to="/blogs">Blogs</CustomLink>
                <CustomLink className='p-5 text-xl font-semibold' to="/about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;