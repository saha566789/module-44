import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
   const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$30",
          "features": [
            "Access to gym facilities",
            "Cardio equipment",
            "Locker room access",
            "Free weights area",
            "Fitness classes (limited)",
            "Sauna access"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": "$50",
          "features": [
            "Access to gym facilities",
            "Cardio equipment",
            "Locker room access",
            "Free weights area",
            "Full access to fitness classes",
            "Personal trainer consultation (1 session)",
            "Swimming pool access",
            "Towel service"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": "$80",
          "features": [
            "Access to gym facilities",
            "Cardio equipment",
            "Locker room access",
            "Free weights area",
            "Full access to fitness classes",
            "Personal trainer consultation (2 sessions)",
            "Nutrition counseling",
            "Massage therapy",
            "24/7 gym access"
          ]
        }
      ]
      
    return (
        <div className="m-12">
            <h2 className="text-5xl">best prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
           priceOptions.map(option => <PriceOption 
            key={option.id} 
            option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;