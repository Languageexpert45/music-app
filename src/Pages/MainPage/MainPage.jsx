import {React, useState, useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';
import CenterblockHeader from '../../components/CenterblockHeader/CenterblockHeader';
import CenterblockFilter from '../../components/CenterblockFilter/CenterblockFilter';
import MainPageContent from '../../components/CenterblockContent/MainPageContent';
import SideBar from '../../components/SideBar/SideBar';
import Bar from '../../components/Bar/Bar';
import useLocalStorage from 'use-local-storage';
import {useGetAllTracksQuery, useGetSelectionsQuery} from "../../services/allTracksRTK";




const Main = (props) => {

const {data: selections} = useGetSelectionsQuery();


const { data: allTracks, error, isLoading } = useGetAllTracksQuery();

const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

const switchTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

    return (
        <div className="container" data-theme={theme}>
          <main className="main">
            <Navbar {...props} switchTheme = {switchTheme} />
            <div className="main__centerblock centerblock"  >
              <Search />
              <CenterblockHeader />
              <CenterblockFilter {...props} />
              <MainPageContent error = {error} allTracks = {allTracks} isLoading = {isLoading} />
            </div>
            <SideBar compilationTracks = {selections} error = {error} isLoading = {isLoading} />
          </main>
          <Bar {...props}/>
        </div>
    )
}

export default Main