import React from "react";
import Icon from "./Icon";

const LightPill = ({width, height, src, children}) => {

    return (
        <div className="bg-white rounded-3xl p-6 flex flex-row items-center shadow-card" style={{ width, height }}>
            <div className="bg-gray-40 h-16 w-16 rounded-lg mr-6">
                <Icon svg={src}/>
            </div>
            <div className="flex flex-col flex-start">
                {children}
            </div>
        </div>
    )
}

export default LightPill;