import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Collection_m from './components/Collection_m';
import Collection_w from './components/Collection_w';
import Collection_k from './components/Collection_k';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/collection/men' element={<Collection_m/>}/>
      <Route path='/collection/women' element={<Collection_w/>}/>
      <Route path='/collection/kids' element={<Collection_k/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
