function MealCard({ meal }) {
    return (
      <div className="border rounded-lg p-4 bg-white shadow hover:shadow-md">
        <img src={meal.image} alt={meal.name} className="w-full h-40 object-cover rounded-md" />
        <h3 className="mt-2 font-semibold">{meal.name}</h3>
        <p className="text-gray-600">${meal.price}</p>
      </div>
    );
  }
  
  export default MealCard;
  