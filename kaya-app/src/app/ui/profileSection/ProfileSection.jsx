import React from "react";
import Image from "next/image";
import PetDetails from "./PetDetails";
import UpcomingVisits from "./UpcomingVisits";

const ProfileSection = () => {

    return (
        <div className="text-black w-[600px] h-screen flex flex-col items-center justify-evenly">
            <Image 
                src="/profile.jpg"
                height={200}
                width={200}
                className="h-[200px] rounded-full object-cover"
            />
            <PetDetails />
            <UpcomingVisits />
        </div>
    )
}

export default ProfileSection;