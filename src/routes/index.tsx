import { Routes, Route, Navigate } from 'react-router-dom';
import { About } from '../components/About';
import { Gvirtus } from '../components/Gvirtus';
import { Services } from '../components/services';
import { Products } from '../components/Products';
import { Plans } from '../components/Plans';
import { Blog } from '../components/Blog';
import { Contact } from '../components/Contact';
import { AppF } from '../page';
export const AppRoutes = () => {

  return (
    <Routes >
      <Route path="/pagina-inicial" element={<AppF/>}/>
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      <Route path="/Hero" element={<AppF/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Gvirtus" element={< Gvirtus/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Products" element={<Products/>} />
      <Route path="/Plans" element={<Plans/>} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
  );
};
