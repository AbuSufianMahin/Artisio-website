import { ArtisioLogo } from '@/Components/Shared/ArtisioLogo/ArtisioLogo';
import Image from 'next/image';
import Link from 'next/link';

import potteryImage from "../../assets/pictures/pottery-picture.jpg"

interface LayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: LayoutProps) => {
    return (

        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 xl:justify-start">
                    <Link href={"/home"} className='flex items-center gap-2'>
                        <ArtisioLogo />
                        <h1 className='text-3xl font-bold'>Artisio</h1>
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-sm">
                        {children}
                    </div>
                </div>
            </div>
            <div className="relative hidden lg:block">
                <Image src={potteryImage} alt='Pottery Image in Authentication page'
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    priority
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 text-white text-5xl font-bold">
                    {/* text if needed */}
                </div>
            </div>
        </div>

    )
}

export default AuthLayout