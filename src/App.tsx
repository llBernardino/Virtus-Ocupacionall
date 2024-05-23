
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Header } from './components/Header/header';
import './animations/animations';
export const App = () => {
  return (
 
    <BrowserRouter>
      <AppRoutes />
      <Header/>
    </BrowserRouter>
    
  );
};
