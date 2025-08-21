import { House } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div className="grid min-h-svh lg:grid-cols-12">
            <div className="flex flex-col lg:col-span-6 xl:col-span-7 gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 lg:justify-start items-center">
                    <Link href="/home" className="flex items-center gap-2 font-bold text-2xl">
                        <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg">
                            <House className="size-5" />
                        </div>
                        <span className="text-4xl">Artisio</span>
                    </Link>
                </div>

                {children}


            </div>
            <div className="bg-muted relative hidden lg:col-span-6 xl:col-span-5 lg:block">
                <Image
                    src="/images/working-pottery.jpg"
                    alt="Working Pottery"
                    fill
                />
            </div>
        </div>
    );
};

export default AuthLayout;