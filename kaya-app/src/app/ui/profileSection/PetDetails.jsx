import React from "react";
import { pet } from "../../lib/sample-data";

const PetDetails = () => {

    return (
        <div className="text-black h-32 w-80 rounded-3xl border-2 border-gray-20 p-5">
            <h1 className="font-manrope font-semibold text-3xl">{pet.pet_name}</h1>
            <div className="flex justify-between mt-2">
                {Object.keys(pet.health_info).map((field) => {
                    return (
                    <div>
                        <div className="font-inconsolata text-gray-70 text-xs capitalize">{field}</div>
                        <div className="font-manrope font-bold text-gray-90 text-base">{pet.health_info[field]}</div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PetDetails;

