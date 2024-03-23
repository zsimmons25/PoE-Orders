import { Outlet, createFileRoute } from '@tanstack/react-router';
import App from '../App';

export const Route = createFileRoute('/poe/compass')({
  component: () => (
    <div>
      <App />
    </div>
  ),
});
