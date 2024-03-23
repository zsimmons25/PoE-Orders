import { createFileRoute } from '@tanstack/react-router';
import Poster from '../Poster';

export const Route = createFileRoute('/poe/compass/post')({
  component: () => (
    <div>
      <Poster />
    </div>
  ),
});
