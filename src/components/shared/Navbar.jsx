import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const Navbar = () => {
    return (
        <header className='border bg-secondary border-b-2'>
            <nav className='w-10/12 md:w-11/12 max-w-7xl py-4 mx-auto flex justify-between'>
                <div>Logo</div>
                <div>
                    <ul className='flex gap-5 font-semiboldnpm '>
                        <li><Link href="/home">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/add-products">Add Products</Link></li>
                    </ul>
                </div>
                <div className='flex gap-2'>
                    <Button size={"sm"} variant={"outline"}>Login</Button>
                    <Button size={"sm"}>Register</Button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;