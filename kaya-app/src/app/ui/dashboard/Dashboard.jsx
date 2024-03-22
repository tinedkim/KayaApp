import React from "react";
import ActivityCard from "./ActivityCard";
import FeedingCard from "./FeedingCard";

const Dashboard = () => {

    return (
        <div className="w-full h-screen border-x-4 border-gray-20 p-[40px] flex flex-col justify-between">
            <div className="text-black text-4xl font-manrope font-bold">
                Dashboard
            </div>
            <ActivityCard />
            <FeedingCard />
        </div>
    )
}

export default Dashboard;