import React from 'react';

const TextField = (props) => {
  return (
      <input
        placeholder={props.label}
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.onChange}
      />
  );
};

export default TextField;
