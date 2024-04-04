import React from "react";
import Link from "next/link";
import Home from "@/../public/icons/home.svg";
import Health from "@/../public/icons/health.svg";
import Calendar from "@/../public/icons/calendar.svg";
import Gear from "@/../public/icons/gear.svg";

const NavigationBar = () => {

    return (
        <div className="min-h-full w-[125px] flex flex-col">
            <div className="flex flex-col h-[450px] justify-between items-center">
                <Link href="/" className="hover:bg-gradient-primary hover:shadow-2xl rounded-xl">
                    <Home/>
                </Link>
                <Link href="/health" className="hover:bg-gradient-primary hover:shadow-2xl rounded-xl" >
                    <Health/>
                </Link>
                <Link href="/calendar" className="hover:bg-gradient-primary hover:shadow-2xl rounded-xl">
                    <Calendar/>
                </Link>
                <Link href="/settings" className="hover:bg-gradient-primary hover:shadow-2xl rounded-xl">
                    <Gear/>
                </Link>
            </div>
            
        </div>
    )
}

export default NavigationBar;