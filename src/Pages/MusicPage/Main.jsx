import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import CenterblockHeader from './components/CenterblockHeader/CenterblockHeader';
import CenterblockFilter from './components/CenterblockFilter/CenterblockFilter';
import CenterblockContent from './components/CenterblockContent/CenterblockContent';
import SideBar from './components/SideBar/SideBar';
import Bar from './components/Bar/Bar';

const Main = (props) => {
    return (
        <div className="container">
          <main className="main">
            <Navbar/>
            <div className="main__centerblock centerblock"  >
              <Search />
              <CenterblockHeader {...props}/>
              <CenterblockFilter {...props} />
              <CenterblockContent 
              // loading={props.loading} 
              {...props} 
              // skeleton={props.songsSkeleton}  
              />
            </div>
            <SideBar {...props} />
          </main>
          <Bar {...props}/>
        </div>
    )
}

export default Main