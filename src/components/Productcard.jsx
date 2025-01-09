import React from 'react';

function ProductCard({ allFood, loading }) {
  return (
    <>
      {loading ? (
        <div className="flex justify-center py-20">
          <img className="w-16" src="https://i.gifer.com/ZZ5H.gif" alt="Loading" />
        </div>
      ) : (
        <div className="flex flex-wrap px-4 lg:px-10">
          {allFood.map((item, index) => {
            const { image, label, calories, dishType, cuisineType, totalTime, ingredients, healthLabels, mealType, yield: servings, cautions } = item.recipe;
            return (
              <div className="p-4 md:w-1/4 w-full" key={index}>
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-300 p-5 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 border border-gray-300">
                  <img className="rounded-lg w-full mb-4 shadow-md" src={image} alt={label} />
                  <h2 className="text-2xl text-gray-800 font-bold truncate mb-2">
                    {label}
                  </h2>
                  <p className="text-lg text-gray-700 mb-1">
                    <span className="font-semibold">Calories:</span> {Math.round(calories)}
                  </p>
                  <p className="text-lg text-gray-700 mb-1">
                    <span className="font-semibold">Dish Type:</span> {dishType?.join(', ')}
                  </p>
                  <p className="text-lg text-gray-700 mb-1">
                    <span className="font-semibold">Cuisine Type:</span> {cuisineType?.join(', ')}
                  </p>
                  <p className="text-lg text-gray-700 mb-1">
                    <span className="font-semibold">Meal Type:</span> {mealType?.join(', ')}
                  </p>
                  <p className="text-lg text-gray-700 mb-1">
                    <span className="font-semibold">Servings:</span> {servings || 'N/A'}
                  </p>
                  <p className="text-lg text-gray-700 mb-1">
                    <span className="font-semibold">Total Time:</span> {totalTime ? `${totalTime} mins` : 'N/A'}
                  </p>
                 
                  <p className="text-lg text-gray-700 mb-1">
                    <span className="font-semibold">Health Labels:</span> {healthLabels ? healthLabels.slice(0, 3).join(', ') + (healthLabels.length > 3 ? '...' : '') : 'N/A'}
                  </p>
                  <p className="text-lg text-gray-700 mb-3">
                    <span className="font-semibold">Cautions:</span> {cautions?.join(', ') || 'None'}
                  </p>
                  
                  
                  <p className="text-lg text-gray-700 mb-3">
                    <span className="font-semibold">Source:</span> {item.recipe.source}
                  </p>
                  
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default ProductCard;
