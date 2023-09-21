import { Box, ToggleButton, ToggleButtonGroup,Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { } from 'react';

const MenuToggler = ({ currentMenu, setCurrentMenu }) => {

    const handleChange = (event, newAlignment) => {
        newAlignment && setCurrentMenu(newAlignment);
    };

    return (
        <Box textAlign={'center'} >
            <ToggleButtonGroup
                size='small'
                value={currentMenu}
                color='error'
                exclusive
                onChange={handleChange}
            >
                {['fruits', 'vegetables', 'drinks', 'dairy',  ].map((foodType, i) => (
                    <ToggleButton
                        key={i}
                        sx={{ textTransform: 'capitalize',border: 'none', mx:1.2}}
                        value={foodType}>
                        {foodType}
                    </ToggleButton>
     
                ))
                }
            </ToggleButtonGroup >
       
            <Link to="/more">
            <Button variant="outlined" color="error"
     
            >More
        
            </Button>
            </Link>
        </Box>
    );
};

export default MenuToggler;