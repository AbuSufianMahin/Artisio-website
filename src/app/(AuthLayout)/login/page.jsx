import { House } from "lucide-react"

import Link from "next/link"
import LoginForm from "./LoginForm"
import Image from "next/image"


export default function LoginPage() {
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
                <div className="flex flex-1 lg:items-center justify-center">
                    <div className="w-full max-w-md">
                        <LoginForm />
                    </div>
                </div>
            </div>
            <div className="bg-muted relative hidden lg:col-span-6 xl:col-span-5 lg:block">
                <Image
                    src="/images/working-pottery.jpg"
                    alt="Working Pottery"
                    fill
                />
            </div>
        </div>
    )
}
