import React, { useContext } from 'react';
import { NewsContext } from '../App';

const SideBar = () => {
  const { _, dispatch } = useContext(NewsContext);
  const handleChange = e => {
    dispatch({ type: 'set_tag', tag: e.target.id });
  };
  return (
    <div className='sidebar'>
      <p>Search</p>
      <ul className=''>
        <li>
          <input onChange={handleChange} type='radio' name='tag' id='story' />
          stories
        </li>
        <li>
          <input onChange={handleChange} type='radio' name='tag' id='comment' />
          comments
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
