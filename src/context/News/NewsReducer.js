export default (state, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return {
        ...state,
        text: action.payload
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'SET_STATE':
      return {
        ...state,
        res: action.payload
      };
    case 'SET_TAG':
      return {
        ...state,
        tag: action.payload
      };
    case 'SET_PAGE':
      return {
        ...state,
        page: action.payload
      };
    default:
      return state;
  }
};
