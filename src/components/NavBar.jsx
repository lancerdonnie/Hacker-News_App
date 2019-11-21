import React, { useState } from 'react';
import Alert from './Alert';

const NavBar = props => {
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
    props.handleSubmit(search);
    setSearch('');
  };
  return (
    <div>
      <nav className='bg-primary row'>
        <h1 className='h4 py-2 col-6'>HACKERNEWS by Lancer_Donnie</h1>
        <form onSubmit={handleSubmit} className=' align-self-center col col-4'>
          <input
            onChange={handleChange}
            value={search}
            className='search'
            type='search'
          />
          {alert && <Alert message='Please enter a valid input' />}
        </form>
      </nav>
    </div>
  );
};

export default NavBar;
