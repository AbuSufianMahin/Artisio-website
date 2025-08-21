"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const RegisterForm = () => {
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);


    return (
        <form className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
                <p className="text-muted-foreground text-md">
                    Enter your details to get started
                </p>
            </div>

            {/* Input Fields */}
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" type="text" placeholder="Enter your full name" required />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="password">Password</Label>
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

                <div className="grid gap-3">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative w-full">
                        <Input
                            id="confirmPassword"
                            type={showConfirmPass ? "text" : "password"}
                            placeholder="Re-enter password"
                            required
                        />
                        <Button
                            variant="ghost"
                            className="absolute right-0 top-0 z-1 rounded-l-none active:scale-92"
                            type="button"
                            onClick={() => setShowConfirmPass(!showConfirmPass)}
                        >
                            {
                                showConfirmPass ?
                                    <EyeOff />
                                    :
                                    <Eye />
                            }
                        </Button>
                    </div>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full">
                    Register
                </Button>

                {/* Divider */}
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                    <span className="bg-background text-muted-foreground relative z-10 px-2">
                        Or continue with
                    </span>
                </div>

                {/* Google Button */}
                <Button variant="outline" className="w-full" type="button">
                    <Image
                        src="/icons/google.svg"
                        alt="google icon"
                        width={20}
                        height={20}
                        className="mr-2"
                    />
                    Sign up with Google
                </Button>
            </div>

            {/* Footer */}
            <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="underline underline-offset-4">
                    Login
                </Link>
            </div>
        </form>

    );
};

export default RegisterForm;