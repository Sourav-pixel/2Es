import React, { useMemo, useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Card from "../Card/Card";
import { Fade, IconButton } from '@mui/material';
import { Close } from "@mui/icons-material";

const SearchMeals = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchBarError, setSearchBarError] = useState('');

    // Remove searchBar error 
    // Automatically after .7 sec
    useMemo(() => setTimeout(() => setSearchBarError(''), 700), [searchBarError])

    return (
        <section>
            <div className='md:h-14 sm:h-12 h-12 flex align-middle justify-center'>
                {/* SearchBar */}
                <div className='w-full max-w-md'> {/* Adjust the max-width here */}
                    <SearchBar
                        setSearchBarError={setSearchBarError}
                        setSearchResults={setSearchResults} />
                </div>
            </div>
            

            {/* Search Results */}
            {searchResults.length > 0 &&
                <Fade onDurationChange={() => 1500} in={true}>
                    <div className='rounded-md shadow-md mb-8 mt-5 p-2 space-y-5 container mx-auto'>
                        {/* Remove all search results button */}
                        <div className='flex space-x-2'>
                            <IconButton onClick={() => setSearchResults([])}>
                                <Close fontSize='inherit' />
                            </IconButton>

                            <h1 className='my-auto text-lg tracking-wider font-semibold'>Search results:</h1>
                        </div>
                        <div className='my-2 pb-8 pt-3 grid whitespace-nowrap md:grid-cols-3 sm:grid-cols-2 md:gap-7 lg:gap-8 gap-8'>
                            {searchResults.slice(0, 3).map(meal => (
                                <Card key={meal.id} meal={meal} />
                            ))}
                        </div>
                    </div>
                </Fade>}
  {/* Search Error */}
  {searchBarError &&
                <Fade in={true}>
                    <h1 className='text-center sm:text-base text-sm font-semibold text-gray-700 tracking-wider font-sans'>
                        {searchBarError}
                    </h1>
                </Fade>
            }

        </section>
    );
};

export default SearchMeals;
