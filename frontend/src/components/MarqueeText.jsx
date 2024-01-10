import { FaStar } from "react-icons/fa";

export const MarqueeText = () => {
    return (
        <div className="w-full bg-red font-heading md:text-2xl text-white p-2 rounded-lg overflow-hidden">
            <span className="w-full animate-marquee flex items-center"><FaStar className="mr-4"/> COMING SOON! <FaStar className="ml-4"/></span>
        </div>
    )
} 