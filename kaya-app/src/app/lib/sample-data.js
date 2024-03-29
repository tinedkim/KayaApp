// ITEMS
export const items = [
    {
        item_id: 1,
        type: 'meal'
    }
];

// ACTIVITY
export const activityData = [{ 
	date: '2024-03-01',
	time: '',
	activity_type: 'walking',
	notes: 'Nuri peed.'
}];

// MEALS
export const mealData = {
	item_id: items[0],
	meal_name: "Beef and Steak",
	amount: "1 cup",
	datetime: "2024-03-01"
}

// USER PROFILE
export const user = {
	user_id: "galbi",
    first_name: "Christine",
    last_name: "Kim",
	email: "galbi@gmail.com",
	pet_id: []
}

// PET PROFILE
export const pet = {
	pet_id: 1,
	user_id: user.user_id,
	pet_name: 'Nuri',
    health_info: {
		weight: "6 lbs",
		dob: '2024-03-01'
	}
};

// CALENDAR
export const events = [
    {
        event_id: 1,
        date: '2024-03-19',
        time: '',
        location: 'PetGroomer',
        event_type: 'Groomer',
        event_name: 'Groom Nuri'
    }
]
