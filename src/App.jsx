import Channelbar from './components/ChannelBar';
import ContentContainer from './components/ContentContainer';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='app'>
      <SideBar />
      <Channelbar />
      <ContentContainer />
    </div>
  );
}

export default App;

// ===== Use to implement dark/light mode toggle =====//
// if (
//   localStorage.theme === 'dark' ||
//   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
// ) {
//   document.documentElement.classList.add('dark');
// } else {
//   document.documentElement.classList.remove('dark');
// }
// localStorage.theme = 'light';
// localStorage.theme = 'dark';
// localStorage.removeItem('theme');
