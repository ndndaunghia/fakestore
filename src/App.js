import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import router from './router';
import {RouterProvider} from 'react-router-dom';

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
   
  )
}

export default App;
