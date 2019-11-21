import React, { useContext } from 'react';
import { NewsContext } from '../App';

const SideBar = () => {
  const state = useContext(NewsContext);
  const handleChange = e => {
    state.dispatch({ type: 'set_tag', tag: e.target.id });
  };
  return (
    <div className='sidebar'>
      <p>Search</p>
      <ul className=''>
        <li>
          <input onChange={handleChange} type='radio' name='tag' id='story' />
          <label htmlFor='story'>stories</label>
        </li>
        <li>
          <input onChange={handleChange} type='radio' name='tag' id='comment' />
          <label htmlFor='comment'>comments</label>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
