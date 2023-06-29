import Container from './components/Container/Container';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';
import { Routes, Route } from 'react-router-dom';
import Redirect from './components/Redirect/Redirect';
import List from './components/List/List';



const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<Redirect />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;