import React, { useEffect, useState } from 'react'
//import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Productcard from './components/Productcard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [search, setSearch] = useState('');
  const [allFood, setAllFood] = useState([]);
  const [loading, setLoading] = useState(false);

  const APP_ID = "b3972793"
  const APP_KEY = "91d4d909be31b7f05b7997fb6f2380b0"

  const fetchFood = async () => {
    try {
      setLoading(true)
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await res.json();
      setAllFood(data.hits);
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <div>
    
      
      <Searchbar search={search} setSearch={setSearch} fetchFood={fetchFood} />
      <Productcard allFood={allFood} loading={loading} />
         </div>
  )
}

export default App