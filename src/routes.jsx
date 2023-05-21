import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainPage from "./components/MainPage";
import About from './components/About';
import Painel from './components/Painel';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Painel />}>
      <Route index element={<MainPage />} />
      <Route path='about' element={<About />} />
    </Route>
  )
)

export default router