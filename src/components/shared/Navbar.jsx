import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='w-10/12 md:w-11/12 max-w-7xl mx-auto border py-5 flex justify-between'>
            <div>Logo</div>
            <div>
                <ul className='flex gap-5'>
                    <Link href="/home"> <li>Home</li></Link>
                    <li>Products</li>
                    <li>Add Products</li>
                </ul>
            </div>
            <div>
                login/register button
            </div>
        </nav>
    );
};

export default Navbar;