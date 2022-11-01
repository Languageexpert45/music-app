import Navbar from './components/Navbar';
import Search from './components/Search';
import CenterblockHeader from './components/CenterblockHeader';
import CenterblockFilter from './components/CenterblockFilter';
import CenterblockContent from './components/CenterblockContent';
import SideBar from './components/SideBar';
import Bar from './components/Bar';
import request from './js/request'

function App () {
  return (
    <div className="wrapper">
        <div className="container">
          <main className="main">
            <Navbar/>
            <div className="main__centerblock centerblock">
              <Search />
              <CenterblockHeader />
              <CenterblockFilter />
              <CenterblockContent />
            </div>
            <SideBar />
          </main>
          <Bar/>
        </div>
    </div>
  )
}


export default App;
