import Channelbar from './components/ChannelBar';
import ContentContainer from './components/ContentContainer';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='flex flex-row bg-gradient-to-r from-green-400 via-purple-500 to-pink-400 h-screen w-screen'>
      <SideBar />
      <Channelbar />
      <ContentContainer />
    </div>
  );
}

export default App;

// if (
//   localStorage.theme === 'dark' ||
//   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
// ) {
//   document.documentElement.classList.add('dark');
// } else {
//   document.documentElement.classList.remove('dark');
// }

// // Whenever the user explicitly chooses light mode
// localStorage.theme = 'light';

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark';

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme');
