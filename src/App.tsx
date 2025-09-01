import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import Header from './components/Header';
import LandingPage from './pages/Landing';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <main>
          <LandingPage />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;