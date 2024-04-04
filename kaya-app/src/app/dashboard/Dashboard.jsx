import React from "react";
import ActivityCard from "./ActivityCard";
import MealCard from "./MealCard";
import LightPill from "../ui/Common/LightPill";
import DarkPill from "../ui/Common/DarkPill";
import Card from "../ui/Common/Card";
import { routines } from "@/app/lib/sample-data.js";

const Dashboard = () => {

    return (
        <div className="w-full min-h-screen border-x-4 border-gray-20 p-[40px] flex flex-col justify-between">
            <div className="text-black text-4xl font-manrope font-bold">
                Hello 🐾
            </div>
            <div className="flex flex-row justify-between">
                <div className="w-[500px] flex flex-row justify-between flex-wrap">
                    {routines.map((routine) => {
                        return (
                            <DarkPill width="225px" height="120px">
                               <h3 className="text-black font-manrope font-semibold text-base">{routine.label}</h3>
                                <h3 className="text-gray-80 font-inconsolata text-base">1 pill a day</h3>
                            </DarkPill>)
                    })}
                </div>
                <ActivityCard />
            </div>
            <div className="flex flex-row justify-between">
                <div>
                    <h1 className="text-black font-manrope font-semibold text-3xl mb-7">Meals</h1>
                    <MealCard />
                </div>
                <div>
                    <h1 className="text-black font-manrope font-semibold text-3xl mb-7">Medicine</h1>
                    <Card width="400px" height="326px">
                        <LightPill>
                            <h3 className="text-black font-manrope font-semibold text-base">Vitamin D</h3>
                            <h3 className="text-gray-80 font-inconsolata text-base">1 pill a day</h3>
                        </LightPill>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;