import { } from 'react';
import delivery_man from "../../../assets/images/delivery_icons/delivery_man.png";
import { useNavigate } from 'react-router-dom';
import { Button, Step, StepButton, Stepper } from '@mui/material';
import { localStorageHandler } from '../../../assets/FakeData/FakeData';


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

    return (
        <div className='col bg-gray-100 lg:order-none order-first space-y-5 px-4 lg:py-6 py-5 rounded-xl mx-auto w-full sm:max-w-[30rem] max-w-[26rem] lg:max-w-[21rem]'>
            <div className='space-y-2.5'>
                {/* Delivery_man Img */}
                <div className='pl-5'>
                    <img className='max-h-20' src={delivery_man} alt="delivery-man" />
                </div>
                {/* Locations Info */}
                <div className='p-3.5 bg-white rounded-lg'>
                    <div className="space-y-4">

                        {[{ id: 0, title: 'Your Location', location: delivery.customer_location },
                        { id: 1, title: 'Shop Location', location: delivery.restaurant_location }].map(step => (

                            <div key={step.id} className="flex space-x-2.5 items-center">
                                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                <div className="mt-auto space-y-">
                                    <h5 className='font-sans text-sm font-semibold'>{step.title}</h5>
                                    <p className='text-xs text-gray-500'>{step.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='space-y-4'>
                {/* Estimated Time */}
            
            </div>

            {/* Contact */}
            <div>
          
              
                    <Button fullWidth
                        color='success'
                        variant='contained'
                        onClick={handleWhatsAppClick}
                        >
                        Contact
                    </Button>
              
            </div>
            <div>
          
  
              <Button fullWidth
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