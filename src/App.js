import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Categories from './components/Categories';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Header from './components/Header';
import DetailsArticles from './components/DetailsArticles';
import Articles from './components/Articles';

function App() {
  return (
    <div className="container">
     <ul>
        <li><NavLink to='/' >Acceuil</NavLink> </li>
        <li><NavLink to='/categorie' >Categorie</NavLink> </li>
        <li><NavLink to='/about' >About</NavLink> </li>
        <li><NavLink to='/articles/1' >Article 1</NavLink> </li>
        <li><NavLink to='/articles/2' >Article 2</NavLink> </li>
     </ul>
     <Routes>
        <Route  index element={<Home />} />
        <Route  path='/acceuil' element={<Home />} />
        <Route  path='/categorie' element={<Categories />} />
        <Route  path='/about' element={<About />} />
        <Route path='/articles' element={<Articles />}>
            <Route index element={<Articles /> } />
            <Route  path=':code' element={<DetailsArticles />} />
        </Route>
        <Route  path='*' element={<NotFound />} />
     </Routes>
    </div>
  );
}

export default App;
