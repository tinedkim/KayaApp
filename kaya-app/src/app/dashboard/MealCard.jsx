import React from "react";
import Card from "../ui/Common/Card";
import { mealData } from "@/app/lib/sample-data.js";

const FeedingCard = () => {

    return (
        <Card width="700px" height="326px">
            {mealData.map((meal) => {
                return (
                    <div className="box-border bg-white rounded-3xl w-48 h-full shadow-card">
                        <h3 className="text-blue">{meal.meal_name}</h3>
                    </div>  
                )
            })}
            
        </Card>
    )

}

export default FeedingCard;