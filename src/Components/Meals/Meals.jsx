import { useContext, useEffect, useState } from 'react';
import Card from '../Card/Card';
import { fakeMeals } from '../../assets/FakeData/FakeData';
import { Box, Button } from '@mui/material';
import MenuToggler from './MenuToggler/MenuToggler';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../App';

// This function will set a personalized Meal by Default according to current time
const getDefaultMeal = () => {


return 'fruits';
};

const Meals = () => {
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

  return (
    <section className='space-y-9 '>

      {/* Toggle Menu */}
      <MenuToggler
        currentMenu={currentMenu}
        setCurrentMenu={setCurrentMenu} />

      {/* Meals */}
      <div className='grid md:grid-cols-3 sm:grid-cols-2 md:gap-7 lg:gap-8 gap-8'>

        {
          meals && meals.map(meal => <Card key={meal.id} meal={meal} />)
        }
      </div>

      {/* Check Out Cart Button */}
      <Box textAlign={'center'}>
        <Button
          disabled={cart.length < 1}
          onClick={() => navigate('/cart')}
          sx={{ textTransform: 'capitalize' }}
          variant='contained'
          color='error'>
          Check out your items
        </Button>
      </Box>
    </section>
  );
};

export default Meals;