import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: () => (
    <div>
      Welcome to Nitid.gg, a website to host tools that I've created to help
      fellow players of games I play.
    </div>
  ),
});
