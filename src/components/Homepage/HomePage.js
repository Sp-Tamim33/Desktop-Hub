import React from 'react';
import { Link } from 'react-router-dom';
import Img from './desktopImg.jpg'

const HomePage = () => {
    return (
        <div>
            <div className='flex py-10 px-20 justify-between mt-10'>
                <div className="content mt-10 ml-8">
                    <h2 className='text-4xl'>Best Desktop for your Work</h2>
                    <h2 className='text-3xl mt-4'>Name : Asos SP340</h2>
                    <p className='mt-8 w-[500px] text-[20px]'>This is One of the best PC ever. You can play games fastly in this PC. You also can do Graphics works. This PC is so fastest. This desktop has 16gb ram. If you want you can increase your ram. It has 8gb graphics card.</p>
                    <div className=' mt-10'>
                        <Link className='p-3 text-2xl bg-indigo-500 text-white rounded-xl' to='/home'>See More</Link>
                    </div>
                </div>
                <div className="img mt-5 text-xl">
                    <img className='w-[600px] rounded' src={Img} alt="paina" />
                </div>
            </div>

        </div>
    );
};

export default HomePage;