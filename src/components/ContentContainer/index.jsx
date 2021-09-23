import TopNavigation from '../TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';

const ContentContainer = () => {
  return (
    <div className='bg-gray-800 m-0 p-2 h-full w-full flex flex-col overflow-hidden'>
      <TopNavigation />
      <div className='flex flex-col items-center h-full w-full mt-0 ml-0 mx-auto px-6 pb-12 overflow-y-scroll '>
        <ContentPost />
        <ContentPost />
        <ContentPost />
        <ContentPost />
        <ContentPost />
        <ContentPost />
        <ContentPost />
        <ContentPost />
        <ContentPost />
      </div>
      <BottomBar />
    </div>
  );
};

const BottomBar = () => {
  return (
    <div className='fixed left-80 right-12 bottom-2 rounded-lg h-12 shadow-xl bg-gray-700 flex flex-row items-center justify-between px-2'>
      <BsPlusCircleFill size='22' className='shadow-lg mx-2 text-gray-400' />
      <input
        type='text'
        className='ml-0 mr-auto bg-transparent outline-none text-gray-400'
      />
    </div>
  );
};

const ContentPost = () => {
  return (
    <div className='flex flex-row p-2 items-center justify-evenly mx-0 w-full my-2'>
      <div className='flex flex-col items-center m-0 w-12 mb-auto'>
        <img
          src='https://i.pravatar.cc/75'
          alt=''
          className='flex-none m-w-12 w-12 h-full rounded-full object-cover bg-gray-100 mb-auto mt-0 mx-0'
        />
      </div>

      <div className='flex flex-col justify-start ml-2 mr-auto w-4/5'>
        <div className='flex flex-row items-center justify-start mr-0'>
          <p className='text-left text-base font-semibold text-primary mr-2'>Person</p>
          <p className='text-left text-xs font-semibold text-gray-600'>yesterday</p>
        </div>
        <p className='text-left text-lg text-secondary mr-auto whitespace-normal'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default ContentContainer;
