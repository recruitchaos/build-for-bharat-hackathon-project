import { GrSearch, GrBasket } from "react-icons/gr";
import { GoKebabHorizontal } from "react-icons/go";

export const Navbar = () => {
    return (
        <div className="w-full font-display flex items-center justify-between">
            <div className="text-2xl md:text-4xl hover:cursor-pointer">
                <span className="text-yellow">Fab</span><span>Basket</span>
            </div>
            <div className="flex">
                <GrSearch  className="mr-4 md:mr-8 hover:cursor-pointer" size="1.3rem"/>
                <GrBasket className="mr-4 md:mr-8 hover:cursor-pointer" size="1.3rem"/>
                <GoKebabHorizontal className="hover:cursor-pointer"size="1.3rem"/>
            </div>            
        </div>
    )
}