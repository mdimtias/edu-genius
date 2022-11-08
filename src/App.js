import {RouterProvider} from 'react-router-dom';
import router from './routes/routes';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
