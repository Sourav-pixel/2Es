import { useContext, useEffect, useState } from 'react';
import Card from '../../Card/Card';
import { fakeMeals } from '../../../assets/FakeData/FakeData';
import GoBackButton from '../../GoBackButton/GoBackButton'

import Condiments from './condiments';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../../App';
import Bakery from './Bakery';
import Cleaning from './Cleaning';

// This function will set a personalized Meal by Default according to current time
const getDefaultMeal = () => {


return 'biscuits';
};

const MoreCat = () => {
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

  return (<div className="bg-gray-100">
   <GoBackButton navigate={'/'} />
    <section className='space-y-9 text-center'>
<h1 className='text-3xl font-bold'>Biscuit</h1>
      {/* Toggle Menu */}
  

      {/* Meals */}


      <div className="overflow-x-scroll" style={{ overflowY: 'hidden', '-webkit-overflow-scrolling': 'touch', overflowX: 'scroll'}}>
      <div className="flex space-x-4 flex-row">
        {meals && meals.map((meal, index) => (
          <div key={index} className="flex-shrink-0 w-64 ">
            {/* Your Card component goes here */}
            <Card meal={meal} />
          </div>
        ))}
      </div>
    </div>


      {/* Check Out Cart Button */}

    </section>
    <Condiments />
    <Bakery />
    <Cleaning />
    </div>
  );
};

export default MoreCat;