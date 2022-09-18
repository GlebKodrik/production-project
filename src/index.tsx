import React, { Suspense } from 'react';
import {render} from "react-dom";
import './index.scss';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

const AboutPage = React.lazy(() => import("./components/about-page/about-page"));
const MainPage = React.lazy(() => import("./components/main-page/main-page"));

const App = () => {
  return (
    <BrowserRouter>
      <Link to={'/about'}>О странице</Link>
      <Link to={'/'}>основная</Link>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />}/>
          <Route path={'/'} element={<MainPage />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

render(
  <App />,
  document.getElementById('root')
)