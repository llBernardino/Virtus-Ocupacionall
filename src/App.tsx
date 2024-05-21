import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gvirtus } from './components/Gvirtus';
import { Services } from './components/services';
import { Products } from './components/Products';

export const App = () => {
  return (

      <BrowserRouter>
          <AppRoutes />
          <Hero />
          <About/>
          <Gvirtus/>
          <Services/>
          <Products/>
      </BrowserRouter>
       
  );
};
