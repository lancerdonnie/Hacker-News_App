import React, { createContext, useReducer, useState } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import axios from 'axios';

export const NewsContext = createContext();
let initialState = { res: [], tag: 'story' };
const reducer = (state, action) => {
  switch (action.type) {
    case 'set_state':
      return { ...state, res: action.payload };
    case 'set_tag':
      return { ...state, tag: action.tag };
    default:
      return state;
  }
};

function App() {
  const [text, setText] = useState('');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(0);

  const [newsState, dispatch] = useReducer(reducer, initialState);
  const fetch = async (page = 0) => {
    try {
      setLoading(1);
      const data = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${text}&tags=${newsState.tag}&page=${page}`
      );
      if (data.status !== 200) return;
      dispatch({ type: 'set_state', payload: data.data.hits });
      setLoading(2);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async e => {
    setText(e);
    fetch();
  };

  const prevPage = () => {
    setPage(page - 1);
    fetch(page);
  };
  const nextPage = () => {
    setPage(page + 1);
    fetch(page);
  };

  return (
    <NewsContext.Provider value={{ state: newsState.res, dispatch }}>
      <div className='container-fluid'>
        <NavBar handleSubmit={handleSubmit} />
        <div className='main mt-4'>
          <SideBar />
          {Object.entries(newsState.res).length === 0
            ? null
            : loading === 2 && <MainContent />}
          {loading === 1 && (
            <div className='spinner-border text-primary' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
          )}
        </div>

        {Object.entries(newsState.res).length !== 0 ? (
          <div>
            <button onClick={nextPage}>next</button>
            {page !== 0 && <button onClick={prevPage}>prev</button>}
          </div>
        ) : null}
      </div>
    </NewsContext.Provider>
  );
}

export default App;
