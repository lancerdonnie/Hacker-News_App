import React, { useContext } from 'react';
import NewsContext from '../context/News/NewsContext';

const SideBar = () => {
  const { handleChange } = useContext(NewsContext);
  const doHandleChange = e => {
    handleChange(e.target.id);
  };
  return (
    <div className='sidebar'>
      <p>Search</p>
      <ul className=''>
        <li className='hov'>
          <input onChange={doHandleChange} type='radio' name='tag' id='story' />
          <label htmlFor='story'>stories</label>
        </li>
        <li className='hov'>
          <input
            onChange={doHandleChange}
            type='radio'
            name='tag'
            id='comment'
          />
          <label htmlFor='comment'>comments</label>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
