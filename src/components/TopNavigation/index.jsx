import {
  FaSearch,
  FaHashtag,
  FaInbox,
  FaQuestionCircle,
  FaRegBell,
  FaUserCircle,
} from 'react-icons/fa';
const TopNavigation = () => {
  return (
    <div className='bg-gray-800 bg-opacity-90 flex-row w-full h-16 py-4 m-0 flex items-center justify-evenly shadow-lg'>
      <FaHashtag
        size='20'
        className='text-lg text-gray-400 ml-2 my-0 tracking-wider font-semibold'
      />
      <h5 className='text-base text-accent text-opacity-75 mr-auto ml-2 my-0 tracking-wider font-semibold'>
        tailwind-css
      </h5>

      <FaRegBell size='24' className='text-gray-600 ml-auto' />
      <FaInbox size='28' className='text-gray-600 mx-4' />
      <FaQuestionCircle size='24' className='text-gray-600 mr-4' />
      <Search />
      <FaUserCircle size='28' className='text-gray-600 mx-4' />
    </div>
  );
};

const Search = () => (
  <div className=' w-1/5  bg-gray-900 shadow-xl flex items-center justify-start px-2 h-9 ml-0 mr-0 rounded-md'>
    <input
      className={`pl-1 w-full font-sans bg-transparent outline-none text-secondary text-lg rounded placeholder-gray-600`}
      type='text'
      placeholder='Search...'
    />
    <FaSearch size='18' className='text-secondarymy-auto' />
  </div>
);

export default TopNavigation;
