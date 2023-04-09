// import React, { useState } from 'react';
// import axios from 'axios';
// import './NutritionCalculator.css';
// import nutrionImage from "../pages/Bmi2/diet2.jpeg"

// function Nutrition() {
//   const [query, setQuery] = useState('');
//   const [foods, setFoods] = useState([]);
//   const [loading, setLoading] = useState(false);

//   function handleSubmit(e) {
//     e.preventDefault();
//     setLoading(true);

//     axios
//       .request({
//         method: 'GET',
//         url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
//         params: { query },
//         headers: {
//           'X-RapidAPI-Key': '9a361b5ab9mshca1ce665063512ep106ae3jsn8d3f31cc6f79',
//           'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com',
//         },
//       })
//       .then((response) => {
//         setFoods(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoading(false);
//       });
//   }

//   return (
//     <div className="nutrition-page" style={{backgroundImage: `url(${nutrionImage})`}}>
//       <div className="nutrition-calculator-container">
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="query">Enter your food query:</label>
//           <input
//             type="text"
//             id="query"
//             name="query"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="e.g. 1lb brisket with fries"
//           />
//           <button type="submit" className="btn-submit" disabled={!query}>
//             {loading ? 'Loading...' : 'Calculate Nutrition'}
//           </button>
//         </form>

//         {foods.length > 0 && (
//           <table>
//             <thead>
//               <tr>
//                 <th>Food</th>
//                 <th>Calories</th>
//                 <th>Serving Size</th>
//                 <th>Protein</th>
//                 <th>Fat</th>
//                 <th>Carbs</th>
//               </tr>
//             </thead>
//             <tbody>
//               {foods.map((food) => (
//                 <tr key={food.name}>
//                   <td>{food.name}</td>
//                   <td>{food.calories.toFixed(1)}</td>
//                   <td>{food.serving_size_g.toFixed(1)} g</td>
//                   <td>{food.protein_g.toFixed(1)} g</td>
//                   <td>{food.fat_total_g.toFixed(1)} g</td>
//                   <td>{food.carbohydrates_total_g.toFixed(1)} g</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Nutrition;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NutritionCalculator.css';
import nutrionImage from "../pages/Bmi2/diet2.jpeg"
import { Button } from '@material-ui/core';

function Nutrition() {
  const [query, setQuery] = useState('');
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cachedFoods, setCachedFoods] = useState([]);

  useEffect(() => {
    const cachedFoods = JSON.parse(localStorage.getItem('cachedFoods')) || [];
    setCachedFoods(cachedFoods);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    axios
      .request({
        method: 'GET',
        url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
        params: { query },
        headers: {
          'X-RapidAPI-Key': '9a361b5ab9mshca1ce665063512ep106ae3jsn8d3f31cc6f79',
          'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com',
        },
      })
      .then((response) => {
        setFoods(response.data);
        setLoading(false);

        // Store food details in cache
        const cachedFoods = JSON.parse(localStorage.getItem('cachedFoods')) || [];
        cachedFoods.push(response.data[0]);
        localStorage.setItem('cachedFoods', JSON.stringify(cachedFoods));
        setCachedFoods(cachedFoods);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }

  return (
    <div className="nutrition-page" style={{backgroundImage: `url(${nutrionImage})`}}>
      <div className="nutrition-calculator-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="query">Enter your food query:</label>
          <input
            type="text"
            id="query"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. 1lb brisket with fries"
          />
          <button type="submit" className="btn-submit" disabled={!query}>
            {loading ? 'Loading...' : 'Calculate Nutrition'}
          </button>
        </form>

        {foods.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Food</th>
                <th>Calories</th>
                <th>Serving Size</th>
                <th>Protein</th>
                <th>Fat</th>
                <th>Carbs</th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food) => (
                <tr key={food.name}>
                  <td>{food.name}</td>
                  <td>{food.calories.toFixed(1)}</td>
                  <td>{food.serving_size_g.toFixed(1)} g</td>
                  <td>{food.protein_g.toFixed(1)} g</td>
                  <td>{food.fat_total_g.toFixed(1)} g</td>
                  <td>{food.carbohydrates_total_g.toFixed(1)} g</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* {cachedFoods.length > 0 && (
          <div className="cached-foods">
            <br></br>
            <h2>History</h2>
            <table>
              <thead>
              <tr>
              <th>Food</th>
              <th>Calories</th>
              <th>Serving Size</th>
              <th>Protein</th>
              <th>Fat</th>
              <th>Carbs</th>
            </tr>
          </thead>
          <tbody>
            {cachedFoods.map((food) => (
              <tr key={food.name}>
                <td>{food.name}</td>
                <td>{food.calories.toFixed(1)}</td>
                <td>{food.serving_size_g.toFixed(1)} g</td>
                <td>{food.protein_g.toFixed(1)} g</td>
                <td>{food.fat_total_g.toFixed(1)} g</td>
                <td>{food.carbohydrates_total_g.toFixed(1)} g</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )} */}
    </div>
    </div>
  );
}

export default Nutrition;


