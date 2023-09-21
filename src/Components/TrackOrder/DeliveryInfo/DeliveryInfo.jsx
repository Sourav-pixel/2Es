import { } from 'react';
import delivery_man from "../../../assets/images/delivery_icons/delivery_man.png";
import { useNavigate } from 'react-router-dom';
import { Button, Step, StepButton, Stepper } from '@mui/material';
// import { localStorageHandler } from '../../../assets/FakeData/FakeData';

import Lottie from 'react-lottie';
import successAnimationData from './success.json';
const DeliveryInfo = ({ delivery }) => {
    const navigate = useNavigate();
    const handleWhatsAppClick = () => {
        // Replace '1234567890' with the actual phone number you want to open in WhatsApp
        const phoneNumber = '+917896651958';
        // You can also add a message by appending '&text=YourMessage' to the URL
        const message = 'Hello, I want to chat with you!';
    
        // Construct the WhatsApp deep link
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
        // Open WhatsApp in a new tab or window
        window.open(whatsappUrl, '_blank');
      };
const handleClick = () => {
    navigate('/cancel');
  
}

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: successAnimationData, // The animation data you imported
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

    return (
        <div className='col bg-gray-100 lg:order-none order-first space-y-5 px-4 lg:py-6 py-5 rounded-xl mx-auto w-full sm:max-w-[30rem] max-w-[26rem] lg:max-w-[21rem]'>
      <div className='space-y-2.5'></div>
      <div className='space-y-0'>
      <Lottie options={defaultOptions} height={200} width={200} />
      </div>
      {/* Contact */}
      <div>
        <Button
          fullWidth
          color='success'
          variant='contained'
          onClick={handleWhatsAppClick}
        >
          Contact
        </Button>
      </div>
      <div>
  
        <Button
          fullWidth
          color='error'
          variant='contained'
          onClick={handleClick}
        >
          Cancel Order
        </Button>
      </div>
    </div>
    );
};

export default DeliveryInfo;