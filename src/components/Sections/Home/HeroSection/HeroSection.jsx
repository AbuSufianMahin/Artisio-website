import { Button } from "@/components/ui/button";
import Slider from "./Slider";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="relative w-full h-[55vh] md:h-[95vh]">
            
            <Slider></Slider>

            {/* Dark Overlay */}
            <div className="absolute inset-0 z-5 bg-black/60" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col z-5 items-center justify-center text-center text-white px-4 md:px-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-2 md:mb-6">
                    Discover the Luxury of <span className="text-primary">Artisio</span>
                </h1>
                <p className="text-sm md:text-xl max-w-2xl mb-6 md:mb-8 text-gray-300">
                    Handcrafted artisan goods that bring timeless beauty and elegance to
                    your home and lifestyle.
                </p>
                <div>
                    <Link href={"products"}>
                        <Button className="text-xs md:text-sm px-4 md:px-6 lg:px-8 py-2 md:py-5">
                            Explore Collection
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;