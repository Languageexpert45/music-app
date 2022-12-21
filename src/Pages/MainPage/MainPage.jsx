import {React, useState, useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import CenterblockHeader from '../../components/CenterblockHeader/CenterblockHeader'
import CenterblockFilter from '../../components/CenterblockFilter/CenterblockFilter'
import MainContent from '../../components/CenterblockContent/MainContent'
import CompilationsContent from '../../components/CenterblockContent/CompilationsContent'
import SideBar from '../../components/SideBar/SideBar'
import Bar from '../../components/Bar/Bar'
import useLocalStorage from 'use-local-storage'
import { useParams } from "react-router-dom"



const MainPage = (props) => {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }


  const {id} = useParams();

  let hasCompilations = false

  if (id >= 1) {
    hasCompilations = true
  }



  return (
    <div className="container" data-theme={theme}>
      <main className="main">
        <Navbar {...props} switchTheme = {switchTheme} />
        <div className="main__centerblock centerblock"  >
          <Search />
          <CenterblockHeader />
          <CenterblockFilter {...props} />
            { hasCompilations
              ? <CompilationsContent/>
              : <MainContent /> 
            }
        </div>
        <SideBar/>
      </main>
      <Bar {...props}/>
    </div>
  )
}

export default MainPage