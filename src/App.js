import logo from './img/logo.svg';
import './styles.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import CenterblockHeader from './components/CenterblockHeader';
import CenterblockFilter from './components/CenterblockFilter';
import CenterblockContent from './components/CenterblockContent';
import SideBar from './components/SideBar';
import Bar from './components/Bar';

function App() {
  return (
    <div class="wrapper">
        <div class="container">
          <main class="main">
            <Navbar/>
            <div class="main__centerblock centerblock">
              <Search/>
              <CenterblockHeader/>
              <CenterblockFilter/>
              <CenterblockContent/>
            </div>
            <SideBar/>
          </main>
          <Bar/>
        </div>
    </div>
    
  );
}

export default App;
