import './App.css';
import { BrowserRouter } from 'react-router-dom'
import PublicRoutes from './routes/PublicRoutes';
import AdminRoutes from './routes/AdminRoutes';
import { Toaster } from 'react-hot-toast';

function App() {
  const role = 'admin'
  return (
    <div className="App">
      <BrowserRouter>
            {
              role === 'admin' ? <AdminRoutes /> : <PublicRoutes />
            }
      </BrowserRouter>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
