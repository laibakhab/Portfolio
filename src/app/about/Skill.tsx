import React from 'react';

const Skill = () => {
  return (
    <>
      <div>
        <h2 className='mb-10 text-center text-5xl font-bold text-yellow-400 underline'>My Skills</h2>
      </div>
      <ul>
        <li className='mb-3 text-2xl text-white ml-16'>HTML</li>
        <div className='w-[54%] ml-16 mb-3 h-4 text-green-600 rounded-2xl underline'></div>
        <li className='mb-3 text-2xl text-white ml-16'>CSS</li>
        <div className='w-[54%] ml-16 mb-3 h-4 text-green-600 rounded-2xl underline'></div>
        <li className='mb-3 text-2xl text-white ml-16'>Typescript</li>
        <div className='w-[54%] ml-16 mb-3 h-4 text-green-600 rounded-2xl underline'></div>
        <li className='mb-3 text-2xl text-white ml-16'>Javascript</li>
        <div className='w-[54%] ml-16 mb-3 h-4 text-green-600 rounded-2xl underline'></div>
        <li className='mb-3 text-2xl text-white ml-16'>React</li>
        <div className='w-[54%] ml-16 mb-3 h-4 text-green-600 rounded-2xl underline'></div>
        <li className='mb-3 text-2xl text-white ml-16'>Next.js</li>
        <div className='w-[54%] ml-16 mb-3 h-4 text-green-600 rounded-2xl underline'></div>
      </ul>
    </>
  );
};

export default Skill;