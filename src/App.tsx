import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Hero } from './components/Hero';
export const App = () => {
  return (

      <BrowserRouter>
          <AppRoutes />
          <Hero />
      </BrowserRouter>
       
  );
};
