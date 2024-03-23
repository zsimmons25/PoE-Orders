import { Link, Outlet, createFileRoute } from '@tanstack/react-router';
import App from '../App';

export const Route = createFileRoute('/poe')({
  component: () => (
    <div className='flex flex-col'>
      <Link to='/poe/compass'>Compass Orders</Link>
      <Outlet />
    </div>
  ),
});
