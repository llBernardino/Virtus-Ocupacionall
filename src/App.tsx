import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Header } from './components/Header/header';
export const App = () => {
  return (
 
    <BrowserRouter>
      <AppRoutes />
      <Header/>
    </BrowserRouter>
    
  );
};
