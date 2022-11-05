import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import CenterblockHeader from './components/CenterblockHeader/CenterblockHeader';
import CenterblockFilter from './components/CenterblockFilter/CenterblockFilter';
import CenterblockContent from './components/CenterblockContent/CenterblockContent';
import SideBar from './components/SideBar/SideBar';
import Bar from './components/bar/Bar';

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
