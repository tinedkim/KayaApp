import React from "react";
import Icon from "./Icon";

const NavigationBar = () => {

    return (
        <div className="min-h-full w-[125px] flex flex-col">
            <div className="flex flex-col h-[450px] justify-between items-center">
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
            </div>
            
        </div>
    )
}

export default NavigationBar;