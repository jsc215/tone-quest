import React from 'react'

const SelectField = props => {
  let multipleOptions = props.options.map((option, index) => {
    return <option key={index} value={option}>{option}</option>
  });

  return (
    <select
      name={props.name}
      value={props.effectOption}
      onChange={props.onChange}>
      <option
        value=''>{props.label}
      </option>
      {multipleOptions}
    </select>
  );
};

export default SelectField;
