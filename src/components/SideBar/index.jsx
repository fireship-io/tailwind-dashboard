import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaPooStorm } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='mx-auto mb-auto'>
        <SideBarIcon icon={<FaPooStorm size='28' className='text-primary' />} />
        <Divider />
        <SideBarIcon
          icon={<BsPlus size='32' className='text-secondary hover:text-accent' />}
        />
        <SideBarIcon
          icon={
            <BsFillLightningFill size='20' className='text-secondary hover:text-accent' />
          }
        />
        <Divider />
        <SideBarIcon
          icon={<BsGearFill size='22' className='text-secondary hover:text-primary' />}
        />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon }) => {
  return <div className='sidebar-icon'>{icon}</div>;
};

const Divider = () => <hr className='sidebar-hr' />;

export default SideBar;
