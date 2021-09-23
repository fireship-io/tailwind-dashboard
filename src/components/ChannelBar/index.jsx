import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaPlus, FaChevronRight } from 'react-icons/fa';
const ChannelBar = () => {
  return (
    <div className='bg-gray-900 bg-opacity-90 w-80 h-auto border-l border-gray-800 m-0  ml-16 overflow-hidden'>
      <TopBlock />
      <div className='p-1 h-max flex flex-col items-center justify-start m-0'>
        <Dropdown />
        <Dropdown2 />
        <Dropdown3 />
      </div>
    </div>
  );
};

const TopBlock = () => (
  <div className='h-16 flex items-center justify-center m-0 p-0'>
    <h5 className='text-lg text-gray-400 mr-auto ml-3 my-0 tracking-wider font-semibold'>
      Tailwind CSS
    </h5>
    <FaChevronDown size='18' className='text-secondary ml-4 mr-auto' />
  </div>
);

const Dropdown = () => (
  <div className='mx-0 my-2 w-full px-4 py-2 '>
    <div className='flex flex-row items-center justify-space-evenly mx-0 '>
      <FaChevronDown size='12' className='text-accent text-opacity-80 my-auto mr-1' />
      <h5 className='text-sm text-accent text-opacity-75 font-bold '>Topics</h5>
      <FaPlus size='16' className='text-accent text-opacity-80 my-auto ml-auto' />
    </div>
    <div className='flex flex-row ml-2 mt-2 w-full mr-0'>
      <div className='flex flex-row items-center bg-gray-600 bg-opacity-75 rounded-full w-auto pr-2 shadow-lg'>
        <BsHash size='24' className='text text-gray-400' />
        <h5 className=' text-gray-400 text-lg font-semibold tracking-normal'>
          tailwind-css
        </h5>
      </div>
    </div>
    <div className='flex flex-row items-center justify-space-evenly ml-2'>
      <BsHash size='26' className='text text-secondary ' />
      <h5 className='text text-secondary text-lg font-semibold tracking-normal'>react</h5>
    </div>
  </div>
);

const Dropdown2 = () => (
  <div className='mx-0 mb-2 w-full px-4 py-2 '>
    <div className='flex flex-row mx-0'>
      <FaChevronDown size='12' className='text-accent text-opacity-80 my-auto mr-2' />
      <h5 className='text-sm text-accent text-opacity-80 font-bold '>Questions</h5>
      <FaPlus size='16' className='text-accent text-opacity-80 my-auto ml-auto' />
    </div>

    <div className='flex flex-row items-center justify-space-evenly ml-2 mt-2'>
      <BsHash size='26' className='text text-secondary' />
      <h5 className='text text-secondary text-lg font-semibold tracking-normal'>
        jit-compilation
      </h5>
    </div>
    <div className='flex flex-row items-center justify-space-evenly ml-2'>
      <BsHash size='26' className='text text-secondary ' />
      <h5 className='text text-secondary text-lg font-semibold tracking-normal'>
        classes
      </h5>
    </div>
  </div>
);

const Dropdown3 = () => (
  <div className='mx-0 mb-2 w-full px-4 py-2'>
    <div className='flex flex-row mx-0'>
      <FaChevronRight size='12' className='text-accent text-opacity-80 my-auto mr-2' />
      <h5 className='text-sm text-accent text-opacity-80 font-bold '>Random stuff</h5>
      <FaPlus size='16' className='text-accent text-opacity-80 my-auto ml-auto' />
    </div>

    {/* <div className='flex flex-row items-center justify-space-evenly ml-2 mt-2'>
            <BsHash size='26' className='text text-secondary' />
            <h5 className='text text-secondary text-lg font-semibold tracking-normal'>
              jit-compilation
            </h5>
          </div>
          <div className='flex flex-row items-center justify-space-evenly ml-2'>
            <BsHash size='26' className='text text-secondary ' />
            <h5 className='text text-secondary text-lg font-semibold tracking-normal'>classes</h5>
          </div> */}
  </div>
);
export default ChannelBar;
