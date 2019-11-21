import React, { useContext } from 'react';
import Content from './Content';
import { NewsContext } from '../App';

const MainContent = () => {
  const { state } = useContext(NewsContext);
  const handleScroll = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(handleScroll);
      window.scrollTo(0, c - c / 8);
    }
  };
  return (
    <>
      <div className='content'>
        {state.map(hit => {
          return <Content key={hit.objectID} hit={hit} />;
        })}
      </div>
      <button onClick={handleScroll} id='myBtn' title='Go to top'>
        Top
      </button>
    </>
  );
};

export default MainContent;
