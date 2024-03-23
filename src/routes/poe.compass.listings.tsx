import { createFileRoute } from '@tanstack/react-router';
import List_view from '../List_View';

export const Route = createFileRoute('/poe/compass/listings')({
  component: () => (
    <div>
      <List_view />
    </div>
  ),
});
