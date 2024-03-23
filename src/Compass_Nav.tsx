import { Link } from '@tanstack/react-router';

function Compass_Nav() {
  return (
    <div className='my-1 flex flex-wrap items-center justify-center'>
      <Link
        to='post'
        className='m-1 rounded-md border-2 border-zinc-600 bg-zinc-800 text-neutral-300'
      >
        Post a Listing
      </Link>
      <Link
        to='listings'
        className='m-1 rounded-md border-2 border-zinc-600 bg-zinc-800 text-neutral-300'
      >
        View Listings
      </Link>
    </div>
  );
}

export default Compass_Nav;
