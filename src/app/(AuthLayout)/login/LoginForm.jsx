"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
    const [showPass, setShowPass] = useState(false);
    return (
        <form className="flex flex-col gap-6" >
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-3xl font-bold tracking-tight">
                    Login to your account
                </h1>
                <p className="text-muted-foreground text-md">
                    Enter your email below to login to your account
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter Your Email" required />
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                    </div>
                    <div className="relative w-full">
                        <Input
                            id="password"
                            type={showPass ? "text" : "password"}
                            placeholder="Enter password"
                            required
                        />
                        <Button
                            variant="ghost"
                            className="absolute right-0 top-0 z-1 rounded-l-none active:scale-92"
                            type="button"
                            onClick={() => setShowPass(!showPass)}
                        >
                            {
                                showPass ?
                                    <EyeOff />
                                    :
                                    <Eye />
                            }
                        </Button>
                    </div>
                </div>
                <Button type="submit" className="w-full">
                    Login
                </Button>
                <div
                    className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                    <span className="bg-background text-muted-foreground relative z-10 px-2">
                        Or
                    </span>
                </div>
                <Button variant="outline" className="w-full" type="button">
                    <Image src="/icons/google.svg"
                        alt="google icon"
                        width={20}
                        height={20} />

                    Login with Google
                </Button>
            </div>
            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="underline underline-offset-4">
                    Register
                </Link>
            </div>
        </form>
    );
};

export default LoginForm;