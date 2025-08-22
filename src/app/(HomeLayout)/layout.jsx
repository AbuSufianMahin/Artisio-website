import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const HomeLayout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            <div className='min-h-screen'>
                {children}
            </div>
            <Footer></Footer>
        </>
    );
};

export default HomeLayout;