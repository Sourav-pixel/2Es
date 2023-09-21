import { useContext, useEffect, useState } from 'react';
import Card from '../../Card/Card';
import { fakeMeals } from '../../../assets/FakeData/FakeData';
// import { Box, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../../App';

// This function will set a personalized Meal by Default according to current time
const getDefaultMeal = () => {


return 'condiments';
};

const Condiments = () => {
  const [meals, setMeals] = useState([]);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [cart, setCart] = useContext(cartContext)
  
  const navigate = useNavigate();


  // Setting the Default Meal 
  useEffect(() => setCurrentMenu(getDefaultMeal), [])

  // Get selected Menu meals from FakeMeals
  useEffect(() => {
    const getCurrentsMeals = currentMenu && fakeMeals[currentMenu]
    setMeals(getCurrentsMeals)
  }, [currentMenu])

  return (<>

    <section className='space-y-9 text-center'>
<h1 className='text-3xl font-bold'>Condiments and Seasonings</h1>
      {/* Toggle Menu */}
  

      {/* Meals */}


      <div className="overflow-x-scroll" style={{ overflowY: 'hidden', '-webkit-overflow-scrolling': 'touch' }}>
      <div className="flex space-x-4 ">
        {meals && meals.map((meal, index) => (
          <div key={index} className="flex-shrink-0 w-64">
            {/* Your Card component goes here */}
            <Card meal={meal} />
          </div>
        ))}
      </div>
    </div>


      {/* Check Out Cart Button */}

    </section>
    </>
  );
};

export default Condiments;