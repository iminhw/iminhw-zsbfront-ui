import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import Matriculate from './pages/Matriculate';
import Advice from './pages/Advice';
import NotFound from './pages/NotFound';

function App() {

  const location = useLocation();
  console.log(
    "%c 招生办查询系统 %c v0.8.0 ",
    "color:#fff;background-color:blue;line-height:20px;border-radius: 5px 0 0 5px",
    "color:#fff;background-color:orange;line-height:20px;border-radius: 0 5px 5px 0"
  );
  
  console.log(
    "%c Developer Email %c iminhw@qq.com ",
    "line-height:20px;background-color:blue;color:#fff; border-radius: 5px 0 0 5px",
    "line-height:20px; background-color:#008000; color:#fff; border-radius: 0 5px 5px 0"
  );
  
  console.log(
    "%c%c Any sufficiently advanced technology, at first glance, is indistinguishable from magic! ",
    "line-height:20px;color:#000;",
    "line-height:20px;background-image:-webkit-gradient(linear,left top,right top,color-stop(0,#ff22ff),color-stop(1,#5500ff));color:transparent;-webkit-background-clip:text;color:#fff; border-radius:5px;"
  );

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/matriculate" element={<Matriculate />} />
        <Route path="/advice" element={<Advice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
