import React from 'react';

function Searchbar({ search, setSearch, fetchFood }) {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-300 py-8">
      <div className="input flex flex-col lg:flex-col justify-center items-center mt-10 mb-7 px-5 lg:px-0 space-y-4">
        <h1 className="text-4xl font-extrabold text-gray-800">Find Your Favorite Food</h1>
        <p className="text-lg text-gray-700 text-center md:text-left">
          Explore a wide variety of recipes and find your perfect meal
          with our easy-to-use search bar.
        </p>

        <div className="flex w-full md:w-auto">
          <input
            type="text"
            value={search}
            placeholder="Search your food"
            onChange={(e) => setSearch(e.target.value)}
            className="shadow-lg bg-gray-50 placeholder-gray-400 rounded-l-lg px-5 py-3 w-full md:w-96 outline-none border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          />
          <button
            onClick={fetchFood}
            className="bg-gradient-to-r from-yellow-400 to-orange-600 px-6 py-3 rounded-r-lg text-white font-semibold shadow-md hover:scale-105 transform transition duration-300 border-none"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
