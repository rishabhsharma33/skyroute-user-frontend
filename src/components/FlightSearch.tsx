import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  MenuItem,
  Autocomplete,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  FlightTakeoff,
  FlightLand,
  CalendarToday,
  Person,
  Search,
  SwapHoriz,
} from '@mui/icons-material';
import dayjs, { Dayjs } from 'dayjs';

const FlightSearchForm: React.FC = () => {
  const [tripType, setTripType] = useState<'round-trip' | 'one-way'>('round-trip');
  const [fromCity, setFromCity] = useState<string>('');
  const [toCity, setToCity] = useState<string>('');
  const [departureDate, setDepartureDate] = useState<Dayjs | null>(dayjs());
  const [returnDate, setReturnDate] = useState<Dayjs | null>(dayjs().add(7, 'day'));
  const [passengers, setPassengers] = useState<number>(1);
  const [travelClass, setTravelClass] = useState<string>('Economy');

  const popularCities = [
    'New York (NYC)', 'Los Angeles (LAX)', 'Chicago (CHI)', 'Miami (MIA)',
    'London (LON)', 'Paris (PAR)', 'Tokyo (TYO)', 'Dubai (DXB)',
    'Singapore (SIN)', 'Mumbai (BOM)', 'Delhi (DEL)', 'Bangalore (BLR)'
  ];

  const classOptions = ['Economy', 'Premium Economy', 'Business', 'First'];

  const handleTripTypeChange = (
    _event: React.MouseEvent<HTMLElement>,
    newTripType: 'round-trip' | 'one-way' | null,
  ) => {
    if (newTripType !== null) {
      setTripType(newTripType);
    }
  };

  const handleSwapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleSearch = () => {
    console.log('Search flights:', {
      tripType,
      fromCity,
      toCity,
      departureDate: departureDate?.format('YYYY-MM-DD'),
      returnDate: returnDate?.format('YYYY-MM-DD'),
      passengers,
      travelClass,
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper
        elevation={8}
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
          border: '1px solid rgba(0,0,0,0.08)',
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: 'primary.main',
            mb: 3,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Search Flights
        </Typography>

        {/* Trip Type Toggle */}
        <Box sx={{ mb: 3 }}>
          <ToggleButtonGroup
            value={tripType}
            exclusive
            onChange={handleTripTypeChange}
            sx={{
              '& .MuiToggleButton-root': {
                px: 3,
                py: 1,
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: 2,
              },
            }}
          >
            <ToggleButton value="round-trip">Round Trip</ToggleButton>
            <ToggleButton value="one-way">One Way</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Grid container spacing={3}>
          {/* From and To Cities */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={5}>
                  <Autocomplete
                    value={fromCity}
                    onChange={(_, newValue) => setFromCity(newValue || '')}
                    options={popularCities}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="From"
                        fullWidth
                        InputProps={{
                          ...params.InputProps,
                          startAdornment: (
                            <InputAdornment position="start">
                              <FlightTakeoff color="primary" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={2} sx={{ textAlign: 'center' }}>
                  <IconButton
                    onClick={handleSwapCities}
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                        transform: 'rotate(180deg)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <SwapHoriz />
                  </IconButton>
                </Grid>
                <Grid item xs={5}>
                  <Autocomplete
                    value={toCity}
                    onChange={(_, newValue) => setToCity(newValue || '')}
                    options={popularCities}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="To"
                        fullWidth
                        InputProps={{
                          ...params.InputProps,
                          startAdornment: (
                            <InputAdornment position="start">
                              <FlightLand color="primary" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Dates */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={tripType === 'round-trip' ? 6 : 12}>
                <DatePicker
                  label="Departure Date"
                  value={departureDate}
                  onChange={(newValue) => setDepartureDate(newValue)}
                  minDate={dayjs()}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      InputProps: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <CalendarToday color="primary" />
                          </InputAdornment>
                        ),
                      },
                    },
                  }}
                />
              </Grid>
              {tripType === 'round-trip' && (
                <Grid item xs={6}>
                  <DatePicker
                    label="Return Date"
                    value={returnDate}
                    onChange={(newValue) => setReturnDate(newValue)}
                    minDate={departureDate || dayjs()}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        InputProps: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <CalendarToday color="primary" />
                            </InputAdornment>
                          ),
                        },
                      },
                    }}
                  />
                </Grid>
              )}
            </Grid>
          </Grid>

          {/* Passengers and Class */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Passengers"
                  type="number"
                  value={passengers}
                  onChange={(e) => setPassengers(parseInt(e.target.value))}
                  inputProps={{ min: 1, max: 9 }}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Class"
                  select
                  value={travelClass}
                  onChange={(e) => setTravelClass(e.target.value)}
                  fullWidth
                >
                  {classOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Grid>

          {/* Search Button */}
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              size="large"
              onClick={handleSearch}
              startIcon={<Search />}
              fullWidth
              sx={{
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                background: 'linear-gradient(45deg, #ff9800 30%, #ffb74d 90%)',
                boxShadow: '0 4px 12px rgba(255, 152, 0, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #f57c00 30%, #ff9800 90%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(255, 152, 0, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Search Flights
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </LocalizationProvider>
  );
};

export default FlightSearchForm;