import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gvirtus } from './components/Gvirtus';
import { Services } from './components/services';
export const App = () => {
  return (

      <BrowserRouter>
          <AppRoutes />
          <Hero />
          <About/>
          <Gvirtus/>
          <Services/>
      </BrowserRouter>
       
  );
};
