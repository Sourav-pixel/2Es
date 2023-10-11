import React, { useRef, useState, useEffect } from 'react';
import { alpha, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Fab from '@mui/material/Fab';
import Fuse from 'fuse.js';
import { allMeals } from "../../../assets/FakeData/FakeData";

const SearchBar = ({ setSearchResults, setSearchBarError }) => {
  const inputRef = useRef(null);
  const [fuse, setFuse] = useState(null);

  // Media Query
  const isSmallScreen = useMediaQuery('(min-width: 640px)');

  // Search Btn handler 
  useEffect(() => {
    const fuseOptions = {
      keys: ['name'],
      includeScore: true,
      threshold: 0.4,
    };

    setFuse(new Fuse(allMeals, fuseOptions));
  }, []);

  const handleSearch = () => {
    const searchPrompt = inputRef.current.value;

    if (searchPrompt) {
      const results = fuse.search(searchPrompt);

      if (results.length > 0) {
        const filteredResults = results.map((result) => result.item);
        setSearchBarError('');
        setSearchResults(filteredResults);
      } else {
        setSearchBarError('No matching results!');
      }
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '1.5rem',
        backgroundColor: alpha('#fff', 1),
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        width: '75%',
        height:'40px',
        margin: '0 auto',
        [isSmallScreen ? '@media (min-width: 960px)' : '']: {
          width: isSmallScreen ? '73%' : '77%',
        },
      }}>
        <div style={{
          padding: isSmallScreen ? '8px 16px' : '4px 8px',
          height: '100%',
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <SearchIcon fontSize={isSmallScreen ? 'medium' : 'small'} />
        </div>

        <InputBase
          inputRef={inputRef}
          placeholder="Search items..."
          style={{
            color: 'inherit',
            padding: isSmallScreen ? '8px 8px 8px 0' : '4px 4px 4px 0',
            paddingLeft: isSmallScreen ? 'calc(1em + 32px)' : 'calc(1em + 16px)',
            transition: 'width 300ms ease-in-out',
            width: '70%',
            [isSmallScreen ? '@media (min-width: 600px)' : '']: {
              width: isSmallScreen ? '25ch' : '20ch',
            },
          }}
        />

        <Fab
          onClick={handleSearch}
          
          style={{
            marginLeft: 'auto',
            padding: isSmallScreen ? '8px 16px' : '4px 8px',
            textTransform: 'capitalize',
            boxShadow: 'none',
            fontSize: isSmallScreen ? '0.9rem' : '0.8rem',
          }}
          variant="extended"
          size='small'
          color='error'
        >
          Search
        </Fab>
      </div>
    </div>
  );
};

export default SearchBar;
