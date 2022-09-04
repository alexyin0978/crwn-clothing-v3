//hooks
import React from 'react';

//style
import './FormInput.styles.scss';

const FormInput = ({ label, ...formInputProps }) => {
  return (
    <div className='group'>
      <input 
      className='form-input'
      {...formInputProps}
      />
      {
        label && 
        <label
        className={`
          ${formInputProps.value.length ? 'shrink' : null}
          form-input-label
        `}
        >
          {label}
        </label>
      }
    </div>
  );
};

export default FormInput;