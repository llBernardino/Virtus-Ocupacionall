import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Hero } from './components/Hero';
import { About } from './components/About';
export const App = () => {
  return (

      <BrowserRouter>
          <AppRoutes />
          <Hero />
          <About/>
      </BrowserRouter>
       
  );
};
