import React from 'react';
import { Box, Container } from '@mui/material';
import FeaturedSection from '../components/FeaturedSection';
import HeroSection from '../components/Hero';
import FlightSearchForm from '../components/FlightSearch';

const LandingPage: React.FC = () => {
  return (
    <Box>
      {/* Hero Section with Search Form Overlay */}
      <Box sx={{ position: 'relative' }}>
        <HeroSection />
        <Container maxWidth="lg">
          <Box
            sx={{
              position: 'relative',
              top: { xs: -60, md: -80 },
              zIndex: 10,
              px: { xs: 2, md: 0 },
            }}
          >
            <FlightSearchForm />
          </Box>
        </Container>
      </Box>

      {/* Featured Section */}
      <Box sx={{ mt: { xs: 4, md: 6 } }}>
        <FeaturedSection />
      </Box>
    </Box>
  );
};

export default LandingPage;