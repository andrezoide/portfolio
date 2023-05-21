import { RouterProvider } from 'react-router-dom';
import router from './routes'
import Painel from './components/Painel';

function App({ routes }) {

  return (
    <>
      <RouterProvider router={router} />
      <Painel />
    </>
  )
}

export default App
