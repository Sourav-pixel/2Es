import React, { useState, useEffect } from 'react';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import GoBackButton from '.././GoBackButton/GoBackButton';
import { localStorageHandler } from '../../assets/FakeData/FakeData';
import { Fade, useMediaQuery } from '@mui/material';

const TrackOrder = () => {
    const getOrderInfo = localStorageHandler('get', 'orderDetails');
    const { delivery } = getOrderInfo;
    const [isLoading, setIsLoading] = useState(true); // State for loader
    const isLargeScreen = useMediaQuery('(min-width:1024px)');

    useEffect(() => {
        // Simulate loading delay (you can replace this with actual data loading)
        const delay = setTimeout(() => {
            setIsLoading(false); // Set loading to false after delay
        }, 1500);

        // Clean up the timeout on component unmount
        return () => clearTimeout(delay);
    }, []);

    return (
        <main className='min-h-screen'>
            {isLoading ? (
                // Beautiful and creative loader design
                <div className="flex items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-40"></div>
                </div>
            ) : (
                <Fade in={true} onDurationChange={() => 1500}>
                    <section className='mx-auto container lg:space-y-3 space-y-1.5 px-3'>
                        {/* Go Back Button */}
                        <GoBackButton navigate={'/'} />

                        <DeliveryInfo delivery={delivery} />
                    </section>
                </Fade>
            )}
        </main>
    );
};

export default TrackOrder;
