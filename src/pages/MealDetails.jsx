import { useParams } from "react-router-dom";

function MealDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow rounded-md">
      <img src="https://via.placeholder.com/400" alt="Meal" className="rounded-md mb-4" />
      <h2 className="text-2xl font-bold">Meal #{id}</h2>
      <p className="text-gray-600 mt-2">Detailed description of the meal goes here.</p>
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
}
export default MealDetails;
