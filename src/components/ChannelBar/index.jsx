import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaPlus } from 'react-icons/fa';

const ChannelBar = () => {
  return (
    <div className='channel-bar'>
      <ChannelBlock />
      <div className='channel-container'>
        <Dropdown header='Topics' selection1='tailwind-css' selection2='react' />
        <Dropdown
          header='Questions'
          selection1='jit-compilation'
          selection2='purge-files'
        />
        <Dropdown header='Random' selection1='variants' selection2='plugins' />
      </div>
    </div>
  );
};

const ChannelBlock = () => (
  <div className='channel-block'>
    <h5 className='channel-block-text'>Tailwind CSS</h5>
    <FaChevronDown size='18' className='text-secondary ml-4 mr-auto' />
  </div>
);

const Dropdown = ({ header, selection1, selection2 }) => (
  <div className='dropdown'>
    <div className='dropdown-header '>
      <FaChevronDown size='12' className='text-accent text-opacity-80 my-auto mr-1' />
      <h5 className='dropdown-header-text'>{header}</h5>
      <FaPlus size='16' className='text-accent text-opacity-80 my-auto ml-auto' />
    </div>
    <div className='dropdown-selection'>
      <div className='dropdown-selected-badge'>
        <BsHash size='24' className='text text-gray-400' />
        <h5 className='dropdown-selection-text'>{selection1}</h5>
      </div>
    </div>
    <div className='dropdown-selection'>
      <BsHash size='26' className='text text-secondary ' />
      <h5 className='dropdown-selection-text'>{selection2}</h5>
    </div>
  </div>
);

export default ChannelBar;
