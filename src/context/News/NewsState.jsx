import NewsContext from './NewsContext';
import React, { useReducer } from 'react';
import reducer from './NewsReducer';
import axios from 'axios';

const initialState = {
  res: [],
  tag: 'story',
  text: '',
  page: 0,
  loading: 0
};
const NewsState = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //handle submit
  const handleSubmit = e => {
    dispatch({ type: 'SET_TEXT', payload: e });
    fetch();
  };
  //fetch data
  const fetch = async (page = state.page) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: 1 });
      const data = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${state.text}&tags=${state.tag}&page=${page}`
      );

      if (data.status !== 200) return;
      dispatch({ type: 'SET_STATE', payload: data.data.hits });
      dispatch({ type: 'SET_LOADING', payload: 2 });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = e => {
    dispatch({ type: 'SET_TAG', payload: e });
  };
  const handlePrevNext = val => {
    if (val === '-') {
      dispatch({ type: 'SET_PAGE', payload: state.page - 1 });
    } else {
      dispatch({ type: 'SET_PAGE', payload: state.page + 1 });
    }
  };

  return (
    <NewsContext.Provider
      value={{ state, handleSubmit, handleChange, fetch, handlePrevNext }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};
export default NewsState;
