import React from 'react';

const Alert = props => {
  return (
    <di className='alert alert-danger' role='alert'>
      {props.message}
    </di>
  );
};

export default Alert;
