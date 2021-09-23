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
    <div className='top-navigation'>
      <HashtagIcon />
      <Title />
      <BellIcon />
      <InboxIcon />
      <QuestionIcon />
      <Search />
      <UserCircle />
    </div>
  );
};

const Search = () => (
  <div className='search'>
    <input className='search-input' type='text' placeholder='Search...' />
    <FaSearch size='18' className='text-secondary my-auto' />
  </div>
);

const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />;
const Title = () => <h5 className='title-text'>tailwind-css</h5>;
const BellIcon = () => (
  <FaRegBell
    size='24'
    className='cursor-pointer text-grayIcon hover:text-primary ml-auto mr-4 shadow-lg transition duration-300 ease-in-out'
  />
);
const InboxIcon = () => (
  <FaInbox
    size='24'
    className='cursor-pointer text-grayIcon hover:text-primary mx-4 shadow-lg transition duration-300 ease-in-out'
  />
);
const QuestionIcon = () => (
  <FaQuestionCircle
    size='24'
    className='cursor-pointer text-grayIcon hover:text-primary mx-4 shadow-lg transition duration-300 ease-in-out'
  />
);
const UserCircle = () => (
  <FaUserCircle
    size='24'
    className='cursor-pointer text-grayIcon hover:text-primary mx-4 shadow-lg transition duration-300 ease-in-out'
  />
);
export default TopNavigation;
