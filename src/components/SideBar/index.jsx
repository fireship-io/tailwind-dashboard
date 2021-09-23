import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaPooStorm } from 'react-icons/fa';
import SideBarIcon from './SideBarIcon';

const SideBar = () => {
  return (
    <div className=' flex flex-column mt-0 h-screen w-16 mx-0 fixed top-0 left-0 items-start justify-center shadow-lg'>
      <div className='mx-auto'>
        <SideBarIcon icon={<FaPooStorm size='28' className='text-primary' />} />
        <Divider />
        <SideBarIcon icon={<BsPlus size='32' className='text-accent' />} />
        <SideBarIcon icon={<BsFillLightningFill size='20' className='text-accent' />} />
        <Divider />
        <SideBarIcon icon={<BsGearFill size='22' className='text-secondary' />} />
      </div>
    </div>
  );
};

const Divider = () => <hr className='border rounded-full border-gray-900 mx-3' />;

export default SideBar;
