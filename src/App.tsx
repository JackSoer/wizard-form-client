import router from './pages/router';
import './scss/reset.scss';
import './scss/general.scss';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
