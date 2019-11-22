import React, { createContext, useState, useContext } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import NewsContexte from './context/News/NewsContext';

export const NewsContext = createContext();
function App() {
  const newsContext = useContext(NewsContexte);

  const prevPage = () => {
    newsContext.handlePrevNext('-');
    newsContext.fetch(newsContext.state.page);
  };
  const nextPage = () => {
    newsContext.handlePrevNext('+');
    newsContext.fetch(newsContext.state.page);
  };

  return (
    <div className='container-fluid'>
      <NavBar />
      <div className='main mt-4'>
        <SideBar />
        {Object.entries(newsContext.state.res).length === 0
          ? null
          : newsContext.state.loading === 2 && <MainContent />}
        {newsContext.state.loading === 1 && (
          <div className='spinner-border text-primary' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        )}
      </div>

      {Object.entries(newsContext.state.res).length !== 0 ? (
        <div>
          <button onClick={nextPage}>next</button>
          {newsContext.state.page !== 0 && (
            <button onClick={prevPage}>prev</button>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default App;
