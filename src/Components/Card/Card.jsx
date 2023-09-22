import React, { useState, useEffect } from 'react';
import { Card as MUICard, CardMedia, CardContent, Typography, ButtonBase, Box, Fade, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Style for MUI Card Hover effect
export const hoverEffectStyle = {
  boxShadow: 'none',
  bgColor: 'white',
  marginX: 'auto',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  '&:hover': {
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    transform: 'scale(1.005)',
  },
};

const Card = ({ meal }) => {
  const { id, name, description, img, price } = meal;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1100);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Fade onDurationChange={() => 1500} in={true}>
      <MUICard
        onClick={() => navigate(`/meal/${id}`)}
        className="col w-full"
        sx={{ ...hoverEffectStyle, maxWidth: 260 }}
      >
        <ButtonBase sx={{ width: '100%', height: '100%' }}>
          <Box>
            {/* Food Image */}
            <CardMedia className="pt-4">
              {loading ? (
                <Skeleton variant="rectangular" width={260} height={180} />
              ) : (
                <Fade in={true} onDurationChange={() => 1500}>
                  <img
                    className="h-36 sm:h-44 md:h-32 lg:h-44 mx-auto"
                    src={img}
                    alt={name}
                  />
                </Fade>
              )}
            </CardMedia>
            <CardContent className="text-center">
              {/* Food Name */}
              <Typography
                variant="h6"
                className="mb-5"
                fontSize={'1.05rem'}
                component="div"
              >
                {loading ? (
                  <Skeleton />
                ) : (
                  `${name.length > 24 ? name.slice(0, 24) + '...' : name}`
                )}
              </Typography>

              {/* Food Short Descriptions */}
              <Typography variant="body2" color="text.secondary">
                {loading ? (
                  <Skeleton />
                ) : (
                  `${description.length > 30 ? description.slice(0, 25) + '...' : description}`
                )}
              </Typography>

              {/* Food Price */}
              <Typography sx={{ mt: 1.3 }} variant="h6" component="div">
                {loading ? (
                  <Skeleton width={100} />
                ) : (
                  `₹${price}`
                )}
              </Typography>
            </CardContent>
          </Box>
        </ButtonBase>
      </MUICard>
    </Fade>
  );
};

export default Card;
