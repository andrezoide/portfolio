import { Routes, Route, Router } from 'react-router-dom';
import Painel from './components/Painel';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  let component
  switch (window.location.pathname) {
    case '/':
      component = <MainPage />
      break
    case '/about':
      component = <About />
      break
    case '/projects':
      component = <Projects />
      break

  }
  return <>
    <Routes>
      <Router>
        {component}
      </Router>
    </Routes>
    <Painel />
  </>
}

export default App
