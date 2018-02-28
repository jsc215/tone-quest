import React from 'react';
import { browserHistory } from 'react-router';

const BackButton = () => {
  return(
    <div>
      <a className='button tiny' onClick={browserHistory.goBack}>Back</a>
    </div>
  );
};

export default BackButton;
