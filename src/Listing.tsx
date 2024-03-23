function Listing() {
  return (
    <div className='w-120 h-44 rounded-md border-2 border-zinc-800 bg-zinc-600'>
      <h1>Listing Lifespan: 3m24s</h1>
      <div className='flex h-28'>
        <div className='mx-2 flex w-24 flex-col text-sm'>
          <span className='flex items-center justify-center'>
            <img className='size-8' src='/src/assets/legion.png' />
          </span>
          <strong>x10</strong>
          <strong>Price: 15 C</strong>
          <strong>Total: 150 C</strong>
        </div>
        <div className='mx-2 flex w-24 flex-col text-sm'>
          <span className='flex items-center justify-center'>
            <img className='size-8' src='/src/assets/beyond.png' />
          </span>
          <strong>x10</strong>
          <strong>Price: 15 C</strong>
          <strong>Total: 150 C</strong>
        </div>
        <div className='mx-2 flex w-24 flex-col text-sm'>
          <span className='flex items-center justify-center'>
            <img className='size-8' src='/src/assets/harvest.png' />
          </span>
          <strong>x10</strong>
          <strong>Price: 15 C</strong>
          <strong>Total: 150 C</strong>
        </div>
        <div className='mx-2 flex w-24 flex-col text-sm'>
          <span className='flex items-center justify-center'>
            <img className='size-8' src='/src/assets/breach.png' />
          </span>
          <strong>x10</strong>
          <strong>Price: 15 C</strong>
          <strong>Total: 150 C</strong>
        </div>
      </div>
      <div className='flex h-6'>
        <strong className='mx-4'>Grand Total: 3 Divine</strong>
        <button className='mx-4 w-24 rounded-md border-2 border-zinc-800 bg-zinc-700 text-sm'>
          Copy Whisper
        </button>
      </div>
    </div>
  );
}

export default Listing;
