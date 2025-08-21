import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import Image from "next/image";

const LoginForm = () => {
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
                    <Input id="password" type="password" placeholder="Enter Password" required />
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