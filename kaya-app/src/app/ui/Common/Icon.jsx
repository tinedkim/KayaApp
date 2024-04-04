import Image from "next/image";
import React from "react";
const Icon = ({svg}) => {

    return (
        <button className="text-black size-12 rounded-xl">
            <Image src={svg}/>
        </button>
    )
}

export default Icon;