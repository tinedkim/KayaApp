import React from "react";

const Card = ({width, height, children}) => {

    return (
        <div className="bg-gray-40 rounded-3xl p-8" style={{ width, height }}>
            {children}
        </div>
    )
}

export default Card;