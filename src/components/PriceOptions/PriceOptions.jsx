import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const PriceOptions = [
        {
            "id": 1,
            "name": "Basic",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Open gym (no classes)",
                "24/7 Access",
                "Cardio zone access",
                "Free Wi-Fi",
                "Fitness tracking app access"
            ],
            "price": 29.99,
        },
        {
            "id": 2,
            "name": "Standard",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group classes",
                "One personal training session per month",
                "Nutritional guidance",
                "Access to sauna & steam room",
                "Discount on fitness supplements",
                "Towel service",
                "Hydration station access"
            ],
            "price": 59.99,
        },
        {
            "id": 4,
            "name": "VIP",
            "features": [
                "All Premium features",
                "Customized workout plan",
                "Dedicated personal trainer",
                "Private training sessions",
                "Priority booking for classes",
                "Private locker",
                "Free gym merchandise",
                "Unlimited guest passes",
                "Exclusive VIP lounge access",
                "Complimentary fitness consultation",
                "Free meal planning service"
            ],
            "price": 149.99,
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;