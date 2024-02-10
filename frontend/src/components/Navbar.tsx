import { GrSearch, GrBasket } from "react-icons/gr";
import { GoKebabHorizontal } from "react-icons/go";
import { useState } from "react";
import * as React from "react";
import SearchBarComponent from "./SearchBar";
import { AudioRecorder } from "react-audio-voice-recorder";

export const Navbar = () => {

    const [value, setValue] = useState<string>("");

    return (
        <div className="w-full font-display flex items-center justify-between">
            <div className="text-2xl md:text-4xl hover:cursor-pointer">
                <span className="text-yellow">Fab</span><span>Basket</span>
            </div>
            <div className="flex flex-row justify-items-stretch items-center">
                <SearchBarComponent />
                <GrBasket className="mr-4 md:mr-8 hover:cursor-pointer" size="1.3rem" />
                <GoKebabHorizontal className="hover:cursor-pointer" size="1.3rem" />
            </div>            
        </div>
    )
}