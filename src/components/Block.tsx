import { useState } from 'react';

export const Block = () => {
  const [block, setBlock] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState('X');

  const checkWinner = (block: null[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (block[a] !== null && block[a] === block[b] && block[b] === block[c])
        return true;
    }
    return false;
  };

  const handleClick = (index: number) => {
    const blockCopy = Array.from(block);

    if (blockCopy[index] !== null) return;
    blockCopy[index] = currentTurn;

    const win = checkWinner(blockCopy);
    if (win) {
      alert(`${currentTurn} won the game`);
      window.location.reload();
    }

    setCurrentTurn(currentTurn === 'X' ? 'O' : 'X');
    setBlock(blockCopy);
  };

  return (
    <>
      <h1 className='text-center mt-10'>TicTacToe With React + TypeScript</h1>
      <div className='flex flex-wrap items-center justify-center m-auto py-3 w-[316px] h-[314px] border border-black'>
        <div
          onClick={() => handleClick(0)}
          className='flex justify-center items-center font-bold text-xl h-24 w-24 border border-black cursor-pointer'
        >
          {block[0]}
        </div>
        <div
          onClick={() => handleClick(1)}
          className='flex justify-center items-center font-bold text-xl h-24 w-24 border border-black cursor-pointer'
        >
          {block[1]}
        </div>
        <div
          onClick={() => handleClick(2)}
          className='flex justify-center items-center font-bold text-xl h-24 w-24 border border-black cursor-pointer'
        >
          {block[2]}
        </div>
        <div
          onClick={() => handleClick(3)}
          className='flex justify-center items-center font-bold text-xl h-24 w-24 border border-black cursor-pointer'
        >
          {block[3]}
        </div>
        <div
          onClick={() => handleClick(4)}
          className='flex justify-center items-center font-bold text-xl h-24 w-24 border border-black cursor-pointer'
        >
          {block[4]}
        </div>
        <div
          onClick={() => handleClick(5)}
          className='flex justify-center items-center font-bold text-xl h-24 w-24 border border-black cursor-pointer'
        >
          {block[5]}
        </div>
        <div
          onClick={() => handleClick(6)}
          className='flex justify-center items-center font-bold text-xl h-24 w-24 border border-black cursor-pointer'
        >
          {block[6]}
        </div>
        <div
          onClick={() => handleClick(7)}
          className='flex justify-center items-center font-bold text-xl h-24 w-24 border border-black cursor-pointer'
        >
          {block[7]}
        </div>
        <div
          onClick={() => handleClick(8)}
          className='flex justify-center items-center font-bold text-xl h-24 w-24 border border-black cursor-pointer'
        >
          {block[8]}
        </div>
      </div>
    </>
  );
};
