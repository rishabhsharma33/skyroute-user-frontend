import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Quick Booking',
      links: [
        'Book Flights',
        'Book Hotels',
        'Holiday Packages',
        'Train Booking',
        'Bus Booking',
        'Cab Booking',
      ],
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Careers',
        'Press Room',
        'Investor Relations',
        'Partner With Us',
        'Advertise With Us',
      ],
    },
    {
      title: 'Support',
      links: [
        'Customer Care',
        'FAQ',
        'Travel Guidelines',
        'Cancellation Policy',
        'Refund Policy',
        'Travel Insurance',
      ],
    },
    {
      title: 'Legal',
      links: [
        'Terms & Conditions',
        'Privacy Policy',
        'Cookie Policy',
        'Fraud Protection',
        'Terms of Service',
        'Grievance Officer',
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook />, href: '#', label: 'Facebook' },
    { icon: <Twitter />, href: '#', label: 'Twitter' },
    { icon: <Instagram />, href: '#', label: 'Instagram' },
    { icon: <LinkedIn />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #263238 0%, #37474f 100%)',
        color: 'white',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Company Info */}
          <Grid item xs={12} md={3}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              {/* <Plane sx={{ fontSize: 32, color: 'secondary.main' }} /> */}
              <Typography variant="h5" component="div" fontWeight={700}>
                FlightBooker
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.8, lineHeight: 1.6 }}>
              Your trusted travel partner for booking flights, hotels, and holiday packages worldwide. 
              Experience seamless travel planning with unbeatable prices.
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <Phone sx={{ fontSize: 16 }} />
                <Typography variant="body2">+1-800-FLIGHT</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <Email sx={{ fontSize: 16 }} />
                <Typography variant="body2">support@flightbooker.com</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <LocationOn sx={{ fontSize: 16 }} />
                <Typography variant="body2">New York, NY</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <Grid item xs={6} md={2} key={index}>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                {section.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {section.links.map((link, linkIndex) => (
                  <Box component="li" key={linkIndex} sx={{ mb: 1 }}>
                    <Link
                      href="#"
                      color="inherit"
                      underline="none"
                      sx={{
                        opacity: 0.8,
                        fontSize: '0.875rem',
                        '&:hover': {
                          opacity: 1,
                          color: 'secondary.main',
                        },
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {link}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Newsletter and Social */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Stay Connected
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Follow us for travel tips and exclusive deals
            </Typography>
            <Box display="flex" gap={1} flexWrap="wrap">
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  color="inherit"
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      backgroundColor: 'secondary.main',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 3 }} />

        {/* Bottom Footer */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              © 2025 FlightBooker. All rights reserved. | Licensed Travel Agent
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-end' }} gap={2}>
              <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.7, fontSize: '0.875rem' }}>
                Sitemap
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.7, fontSize: '0.875rem' }}>
                Accessibility
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.7, fontSize: '0.875rem' }}>
                Security
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;