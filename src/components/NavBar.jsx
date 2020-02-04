import React, { useState, useContext } from 'react';
import Alert from './Alert';
import NewsContext from '../context/News/NewsContext';

const NavBar = props => {
  const newsContext = useContext(NewsContext);
  const [search, setSearch] = useState('');
  const [alert, setAlert] = useState(false);

  const handleChange = e => {
    setSearch(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (search === '') {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
      return;
    }
    newsContext.handleSubmit(search);
    setSearch('');
  };
  return (
    <div>
      <nav className='row'>
        <h1 className='color2 h4 py-2 col-6'>
          HACKERNEWS <span className='h5 text-white'>by Lancer_Donnie</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className=' align-self-center  col-6 px-auto'
        >
          <input
            onChange={handleChange}
            value={search}
            className='search'
            type='search'
            placeholder='search for something...'
          />

          <button type='submit' className='btn btn-dark search-btn 5'>
            search
          </button>
          {alert && <Alert message='Please enter a valid input' />}
        </form>
      </nav>
    </div>
  );
};

export default NavBar;
