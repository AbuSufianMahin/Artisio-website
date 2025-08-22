import Link from 'next/link';
import { Facebook, Github, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-primary">
            <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Brand + Copy */}
                <span className="text-sm text-center md:text-left">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-semibold">Artisio</span>. All rights reserved.
                </span>

                {/* Social Links */}
                <div className="flex space-x-6">
                    <Link
                        href="https://facebook.com"
                        target="_blank"
                        className="hover:opacity-50 transition-colors"
                    >
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                    </Link>

                    <Link
                        href="https://twitter.com"
                        target="_blank"
                        className="hover:opacity-50 transition-colors"
                    >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter (X)</span>
                    </Link>

                    <Link
                        href="https://github.com"
                        target="_blank"
                        className="hover:opacity-50 transition-colors"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                </div>
            </div>
        </footer>

    );
};

export default Footer;