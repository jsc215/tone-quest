import React from 'react';

const TextArea = (props) => {
  return (
    <div>
    <label>{props.label}</label>
      <textarea id='comments' placeholder='Your thoughts'
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.onChange}
      />
    </div>
  );
};

export default TextArea;
