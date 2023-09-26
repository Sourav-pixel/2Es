import { lazy } from 'react';
import logo_white from "/logo_test.png";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className='bg-gradient-to-r from-blue-500 to-purple-500 md:py-8 pt-6 pb-2'>
            <div className='container sm:px-5 px-6 md:space-y-12 sm:space-y-14 space-y-10 mx-auto'>
                <div className='grid gap-y-4 lg:grid-cols-12 grid-cols-2'>
                    {/* Brand_icon */}
                    <div className='col lg:col-span-7'>
                        <img
                            className='sm:h-14 h-14 bg-cover '
                            onLoad={lazy}
                            src={logo_white}
                            alt="logo"
                        />
                    </div>

                    {/* Social Media Links */}
                    <div className='text-gray-100 grid md:grid-cols-2 lg:col-span-5 md:ml-[80px] sm:ml-4 ' style={{ display: 'flex', flexDirection: 'row', gap: '0' }}>
    <SocialMediaLinks />
</div>

                </div>

                <div className='grid sm:gap-y-9 gap-y-7 lg:grid-cols-12 md:grid-cols-2 grid-cols-1'>
                    {/* Copyright */}
                    <div className='col lg:col-span-7 md:text-start text-center md:order-first order-last'>
                   
                        <div 
                            target="_blank" rel="noopener noreferrer">
                            <span className='md:text-gray-400 text-gray-500 text-xs'>
                                copyright@sourav2023
                            </span>
                        </div>
                    </div>

                    {/* Privacy & Policy */}
                    <ul className='text-gray-200 col mx-auto lg:col-span-5 md:flex w-full md:justify-evenly grid grid-cols-3 text-sm text-center'>
                        {
                            ['Privacy Policy', 'About Us', 'Our Vision'].map((link, i) => (
                                <li key={i}
                                    className='col text-sm text-center'>
                                    <div className='sm:tracking-wider hover:underline cursor-pointer'
                                           onClick={() => navigate('/aboutus')}>
                                        {link}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                
            </div>
        </footer>
    );
};

// Social Media Links
const SocialMediaLinks = () => {
    return (
        <ul className='md:space-y-1 sm:space-y-1.5 space-y-1 sm:mx-auto ml-auto mr-auto col'>
            {/* Add your social media links here */}
            <li className='text-sm'>
                <a className='text-gray-200 sm:tracking-wider hover:underline block mb-2'
                    href='#'>
                    <img src='/instagram.png' alt='Instagram' className='h-5 w-5 inline mr-2' /> Instagram
                </a>
            </li>
            <li className='text-sm'>
                <a className='text-gray-200 sm:tracking-wider hover:underline block mb-2'
                    href='#'>
                    <img src='/facebook.png' alt='Facebook' className='h-5 w-5 inline mr-2' /> Facebook
                </a>
            </li>
            <li className='text-sm'>
                <a className='text-gray-200 sm:tracking-wider hover:underline block mb-2'
                    href='#'>
                    <img src='/twitter.png' alt='Twitter' className='h-5 w-5 inline mr-2' /> Twitter
                </a>
            </li>
            <li className='text-sm md:text-base'>
    <p className='text-gray-200 sm:tracking-wider hover:underline block mb-2'
        >
        <img src='/location.png' alt='location' className='h-5 w-5 inline mr-2' />Dibrugarh,Dibrugarh-786004
    </p>
</li>

            <li className='text-sm'>
                <p className='text-gray-200 sm:tracking-wider hover:underline block mb-2'
                    >
                    <img src='/dial.png' alt='dial' className='h-5 w-5 inline mr-2' /> +91 123456789
                </p>
            </li>
        </ul>
    );
};

export default Footer;
