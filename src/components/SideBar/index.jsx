import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaPooStorm } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='mx-auto mb-auto'>
        <SideBarIcon icon={<FaPooStorm size='28' />} />
        <Divider />
        <SideBarIcon icon={<BsPlus size='32' />} />
        <SideBarIcon icon={<BsFillLightningFill size='20' />} />
        <Divider />
        <SideBarIcon icon={<BsGearFill size='22' />} />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon }) => <div className='sidebar-icon'>{icon}</div>;
const Divider = () => <hr className='sidebar-hr' />;

export default SideBar;
