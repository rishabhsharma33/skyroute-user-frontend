import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
} from '@mui/material';
import { FlightTakeoff, Star, LocalOffer } from '@mui/icons-material';

const FeaturedSection: React.FC = () => {
  const featuredDestinations = [
    {
      id: 1,
      title: 'Paris, France',
      subtitle: 'City of Love',
      image: 'https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From $599',
      discount: '20% OFF',
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Tokyo, Japan',
      subtitle: 'Modern Metropolis',
      image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From $799',
      discount: '15% OFF',
      rating: 4.9,
    },
    {
      id: 3,
      title: 'New York, USA',
      subtitle: 'The Big Apple',
      image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From $399',
      discount: '25% OFF',
      rating: 4.7,
    },
    {
      id: 4,
      title: 'Dubai, UAE',
      subtitle: 'Luxury Destination',
      image: 'https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From $699',
      discount: '18% OFF',
      rating: 4.8,
    },
  ];

  const specialOffers = [
    {
      id: 1,
      title: 'Weekend Getaway Deals',
      description: 'Book now and save up to 30% on weekend flights',
      color: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
      icon: <LocalOffer />,
    },
    {
      id: 2,
      title: 'Business Class Upgrade',
      description: 'Upgrade to business class for just $199 more',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: <Star />,
    },
    {
      id: 3,
      title: 'Group Booking Discounts',
      description: 'Save big when booking for 4+ passengers',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: <FlightTakeoff />,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Featured Destinations */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: 'primary.main',
            textAlign: 'center',
            mb: 4,
          }}
        >
          Popular Destinations
        </Typography>
        <Grid container spacing={3}>
          {featuredDestinations.map((destination) => (
            <Grid item xs={12} sm={6} md={3} key={destination.id}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={destination.image}
                    alt={destination.title}
                  />
                  <Chip
                    label={destination.discount}
                    color="secondary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      fontWeight: 600,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: '0.875rem',
                    }}
                  >
                    <Star sx={{ fontSize: 16, mr: 0.5 }} />
                    {destination.rating}
                  </Box>
                </Box>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom fontWeight={600}>
                    {destination.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {destination.subtitle}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                    <Typography variant="h6" color="primary" fontWeight={700}>
                      {destination.price}
                    </Typography>
                    <Button size="small" variant="outlined">
                      Book Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Special Offers */}
      <Box>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: 'primary.main',
            textAlign: 'center',
            mb: 4,
          }}
        >
          Special Offers
        </Typography>
        <Grid container spacing={3}>
          {specialOffers.map((offer) => (
            <Grid item xs={12} md={4} key={offer.id}>
              <Card
                sx={{
                  height: '100%',
                  background: offer.color,
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ mb: 2, fontSize: 48 }}>
                    {offer.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight={700}>
                    {offer.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                    {offer.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.3)',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FeaturedSection;