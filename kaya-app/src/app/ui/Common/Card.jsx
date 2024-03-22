import React from "react";

const Card = ({children}) => {

    return (
        <div className="w-[816px] h-96 bg-gray-40 rounded-3xl p-8">
            {children}
        </div>
    )
}

export default Card;