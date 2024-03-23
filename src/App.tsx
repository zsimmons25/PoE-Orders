import './App.css';
import Compass_Nav from './Compass_Nav';
import { Outlet } from '@tanstack/react-router';

function App() {
  return (
    <div className='h-screen w-screen bg-zinc-700 text-center text-neutral-300'>
      Path of Exile Compass Orders
      <Compass_Nav />
      <Outlet />
    </div>
  );
}

export default App;
