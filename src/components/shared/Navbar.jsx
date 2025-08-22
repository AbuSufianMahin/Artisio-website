import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <header className='bg-secondary border-b-2'>
            <nav className='w-11/12 md:w-10/12 max-w-7xl py-5 mx-auto flex items-center justify-between'>
                <div>Logo</div>
                <div className='hidden sm:flex'>
                    <ul className='flex gap-8 text-sm lg:gap-16 lg:text-base font-semibold'>
                        <li><Link href="/home">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/dashboard/add-product">Add Products</Link></li>
                    </ul>
                </div>
                <div className='hidden sm:flex gap-2'>
                    <Link href={"/login"}><Button size={"sm"} variant={"outline"}>Login</Button></Link>
                    <Link href={"register"}><Button size={"sm"}>Register</Button></Link>
                </div>



                <div className='sm:hidden'>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                size={""}
                                variant={"outline"}
                            >
                                <Menu />
                            </Button>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Pages</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Home</DropdownMenuItem>
                            <DropdownMenuItem>Products</DropdownMenuItem>
                            <DropdownMenuItem>Add Products</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {/* <DropdownMenuItem>Login</DropdownMenuItem> */}
                            {/* <DropdownMenuItem>Logout</DropdownMenuItem> */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;