import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/picture.jpeg';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb="23px"
        mt="30px"
      >
        Sweat, smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          backgroundColor: '#ff2625',
          padding: '13px',
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: '0.1',
          display: { lg: 'block', xs: 'none' },
        }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <Box
        component="img"
        src={HeroBannerImage}
        alt="banner"
        className="hero-banner-img"
        sx={{
          borderRadius: '0 0 0 100px', // Round the bottom-left corner
          width: '50%', // Adjust the width of the image
          height: '810px', // Set a fixed height
          objectFit: 'cover', // Maintain aspect ratio and cover the area
          position: 'absolute',
          bottom: 0, // Align the bottom of the image with the bottom of the container
          right: 0, // Align the image with the right side
        }}
      />
    </Box>
  );
};

export default HeroBanner;

