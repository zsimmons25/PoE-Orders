import { useState } from 'react';

type ButtonData = {
  id: number;
  name: string;
  path: string;
};

function Poster() {
  const [selectedButtons, setSelectedButtons] = useState<number[]>([]);

  const toggleSelection = (buttonId: number) => {
    if (selectedButtons.includes(buttonId)) {
      setSelectedButtons(selectedButtons.filter((id) => id !== buttonId));
    } else if (selectedButtons.length >= 4) {
      console.log('Limited to 4 selections');
    } else {
      setSelectedButtons([...selectedButtons, buttonId]);
    }
  };

  const buttons: ButtonData[] = [
    { id: 1, name: 'Legion', path: '/src/assets/legion.png' },
    { id: 2, name: 'Harvest', path: '/src/assets/harvest.png' },
    { id: 3, name: 'Harbinger', path: '/src/assets/harbinger.png' },
    { id: 4, name: 'Breach', path: '/src/assets/breach.png' },
    { id: 5, name: 'Beyond', path: '/src/assets/beyond.png' },
    { id: 6, name: 'Strongbox', path: '/src/assets/strongbox.png' },
  ];

  return (
    <div className='relative flex  flex-col items-center justify-center'>
      <div className='relative flex w-1/2 flex-wrap items-center justify-center'>
        {buttons.map((button) => (
          <button
            className={`${
              selectedButtons.includes(button.id)
                ? 'bg-zinc-400'
                : 'bg-zinc-800'
            } mx-1 h-16 w-16 rounded-md border-2 border-zinc-400`}
            onClick={() => toggleSelection(button.id)}
          >
            <img src={button.path} />
          </button>
        ))}
      </div>
      <div className='size-42'>
        <input
          className='my-2 bg-zinc-800 text-center'
          type='number'
          placeholder='Divine Price'
        />
        {selectedButtons.map((buttonId) => {
          const button = buttons.find((b) => b.id === buttonId);
          return (
            <div className='flex items-center justify-center'>
              <img className='mx-2 h-8 w-8' src={button?.path} />
              <strong>{button?.name}</strong>
              <input
                className='mx-2 bg-zinc-800 text-center'
                type='number'
                placeholder='Amount'
              />
              <input
                className='mx-2 bg-zinc-800 text-center'
                type='number'
                placeholder='Price'
              />
            </div>
          );
        })}
      </div>
      <div className='flex'>
        <button className='mx-1 rounded-md border-2 border-zinc-600 bg-zinc-700'>
          Copy Order Text
        </button>
        <button className='mx-1 rounded-md border-2 border-zinc-600 bg-zinc-700'>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Poster;
